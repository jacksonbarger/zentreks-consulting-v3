/**
 * Newsletter Generator Module
 *
 * This module takes fetched articles and generates a formatted markdown newsletter.
 * It handles categorization, formatting, and file output.
 */

import * as fs from 'fs';
import * as path from 'path';
import { format } from 'date-fns';
import { fetchAllNews, groupByCategory, Article, FetchResult } from './fetch-news';
import {
  OUTPUT_CONFIG,
  TEMPLATE_CONFIG,
  CATEGORIES
} from './config';

// =============================================================================
// Type Definitions
// =============================================================================

interface GenerationResult {
  success: boolean;
  filepath: string;
  articleCount: number;
  errors: string[];
}

// =============================================================================
// Helper Functions
// =============================================================================

/**
 * Generate the newsletter header with branding
 */
function generateHeader(date: Date): string {
  const formattedDate = format(date, 'MMMM d, yyyy');

  return `# ${TEMPLATE_CONFIG.title}

**${TEMPLATE_CONFIG.companyName}** | ${formattedDate}

*${TEMPLATE_CONFIG.tagline}*

---

`;
}

/**
 * Generate the Zentreks commentary placeholder section
 */
function generateCommentaryPlaceholder(): string {
  if (!TEMPLATE_CONFIG.includeCommentary) return '';

  return `## 🎯 Zentreks Insights

> **[PLACEHOLDER: Add Zentreks commentary here]**
>
> This week's top themes and our take on what they mean for businesses:
> - Theme 1: [Add insight]
> - Theme 2: [Add insight]
> - Theme 3: [Add insight]

---

`;
}

/**
 * Format a single article as markdown
 */
function formatArticle(article: Article, index: number): string {
  const parts: string[] = [];

  // Title with link
  parts.push(`### ${index}. [${article.title}](${article.link})`);
  parts.push('');

  // Source and date
  if (OUTPUT_CONFIG.includeSource || OUTPUT_CONFIG.includeDate) {
    const meta: string[] = [];
    if (OUTPUT_CONFIG.includeSource) meta.push(`**Source:** ${article.source}`);
    if (OUTPUT_CONFIG.includeDate) meta.push(`**Date:** ${format(article.date, 'MMM d, yyyy')}`);
    parts.push(meta.join(' | '));
    parts.push('');
  }

  // Summary
  if (OUTPUT_CONFIG.includeSummary && article.summary) {
    parts.push(article.summary);
    parts.push('');
  }

  // Commentary placeholder for each article
  if (TEMPLATE_CONFIG.includeCommentary) {
    parts.push('> **Zentreks Take:** *[Add brief commentary or key takeaway]*');
    parts.push('');
  }

  return parts.join('\n');
}

/**
 * Generate a category section with its articles
 */
function generateCategorySection(
  categoryId: string,
  categoryName: string,
  articles: Article[]
): string {
  if (articles.length === 0) return '';

  const parts: string[] = [];

  // Category header
  parts.push(`## ${categoryName}`);
  parts.push('');

  // Articles in this category
  articles.forEach((article, index) => {
    parts.push(formatArticle(article, index + 1));
  });

  parts.push('---');
  parts.push('');

  return parts.join('\n');
}

/**
 * Generate the full newsletter content
 */
function generateNewsletterContent(fetchResult: FetchResult): string {
  const parts: string[] = [];

  // Header
  parts.push(generateHeader(fetchResult.timestamp));

  // Executive summary / commentary placeholder
  parts.push(generateCommentaryPlaceholder());

  // Group articles by category
  const grouped = groupByCategory(fetchResult.articles);

  // Sort categories by priority
  const sortedCategories = [...CATEGORIES].sort((a, b) => a.priority - b.priority);

  // Generate each category section
  for (const category of sortedCategories) {
    const articles = grouped.get(category.id) || [];
    if (articles.length > 0) {
      parts.push(generateCategorySection(category.id, category.name, articles));
    }
  }

  // Handle any uncategorized articles
  const allCategoryIds = new Set(CATEGORIES.map(c => c.id));
  for (const [categoryId, articles] of grouped) {
    if (!allCategoryIds.has(categoryId)) {
      parts.push(generateCategorySection(categoryId, 'Other News', articles));
    }
  }

  // Quick links section
  parts.push(generateQuickLinks(fetchResult.articles));

  // Footer
  parts.push(TEMPLATE_CONFIG.footer);

  return parts.join('\n');
}

/**
 * Generate a quick links section for easy reference
 */
function generateQuickLinks(articles: Article[]): string {
  const parts: string[] = [];

  parts.push('## 🔗 Quick Links');
  parts.push('');
  parts.push('All articles at a glance:');
  parts.push('');

  articles.forEach((article, index) => {
    parts.push(`${index + 1}. [${article.title}](${article.link}) - *${article.source}*`);
  });

  parts.push('');

  return parts.join('\n');
}

/**
 * Ensure the output directory exists
 */
function ensureOutputDir(): void {
  const outputPath = path.resolve(__dirname, OUTPUT_CONFIG.outputDir);
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
  }
}

/**
 * Generate the output filename with date
 */
function getOutputFilename(): string {
  const dateStr = format(new Date(), 'yyyy-MM-dd');
  return `${OUTPUT_CONFIG.filenamePrefix}-${dateStr}.md`;
}

// =============================================================================
// Main Generation Function
// =============================================================================

/**
 * Main function to generate the newsletter
 * This is the primary entry point for newsletter generation
 */
export async function generateNewsletter(): Promise<GenerationResult> {
  console.log('\n🚀 Starting newsletter generation...\n');

  try {
    // Step 1: Fetch news from all sources
    const fetchResult = await fetchAllNews();

    if (fetchResult.articles.length === 0) {
      console.log('⚠️  No articles found. Newsletter not generated.');
      return {
        success: false,
        filepath: '',
        articleCount: 0,
        errors: ['No articles found from any source']
      };
    }

    // Step 2: Generate newsletter content
    console.log('\n📝 Generating newsletter content...');
    const content = generateNewsletterContent(fetchResult);

    // Step 3: Save to file
    ensureOutputDir();
    const filename = getOutputFilename();
    const filepath = path.resolve(__dirname, OUTPUT_CONFIG.outputDir, filename);

    fs.writeFileSync(filepath, content, 'utf-8');

    console.log(`\n✅ Newsletter generated successfully!`);
    console.log(`📄 Saved to: ${filepath}`);
    console.log(`📊 Articles included: ${fetchResult.articles.length}`);

    return {
      success: true,
      filepath,
      articleCount: fetchResult.articles.length,
      errors: fetchResult.errors
    };

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error(`\n❌ Newsletter generation failed: ${errorMessage}`);

    return {
      success: false,
      filepath: '',
      articleCount: 0,
      errors: [errorMessage]
    };
  }
}

/**
 * Preview the newsletter without saving
 * Useful for testing and development
 */
export async function previewNewsletter(): Promise<string> {
  const fetchResult = await fetchAllNews();
  return generateNewsletterContent(fetchResult);
}
