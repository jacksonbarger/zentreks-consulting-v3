/**
 * News Fetcher Module
 *
 * This module handles fetching and parsing RSS feeds from configured sources.
 * It returns structured article data ready for newsletter generation.
 */

import Parser from 'rss-parser';
import { RSS_FEEDS, FETCH_CONFIG, RSSFeed } from './config';

// =============================================================================
// Type Definitions
// =============================================================================

/**
 * Represents a single article from an RSS feed
 */
export interface Article {
  title: string;           // Article headline
  summary: string;         // Brief description or excerpt
  link: string;            // URL to the full article
  date: Date;              // Publication date
  source: string;          // Name of the source (e.g., "TechCrunch")
  category: string;        // Category for grouping
}

/**
 * Result of the fetch operation
 */
export interface FetchResult {
  articles: Article[];     // Successfully fetched articles
  errors: string[];        // Any errors encountered
  timestamp: Date;         // When the fetch was performed
}

// =============================================================================
// RSS Parser Setup
// =============================================================================

// Create a new RSS parser instance with custom options
const parser = new Parser({
  timeout: FETCH_CONFIG.timeout,
  headers: {
    'User-Agent': 'Zentreks Newsletter Agent/1.0'
  }
});

// =============================================================================
// Helper Functions
// =============================================================================

/**
 * Clean and truncate text for display
 * Removes HTML tags and limits length
 */
function cleanText(text: string | undefined, maxLength: number): string {
  if (!text) return '';

  // Remove HTML tags
  const cleaned = text
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();

  // Truncate if necessary
  if (cleaned.length <= maxLength) return cleaned;
  return cleaned.substring(0, maxLength - 3) + '...';
}

/**
 * Check if an article is within the allowed age range
 */
function isRecentEnough(date: Date): boolean {
  const now = new Date();
  const maxAge = FETCH_CONFIG.maxAgeDays * 24 * 60 * 60 * 1000; // Convert days to ms
  return (now.getTime() - date.getTime()) <= maxAge;
}

/**
 * Parse a date string into a Date object
 * Handles various date formats from RSS feeds
 */
function parseDate(dateString: string | undefined): Date {
  if (!dateString) return new Date();

  const parsed = new Date(dateString);
  return isNaN(parsed.getTime()) ? new Date() : parsed;
}

// =============================================================================
// Main Fetch Function
// =============================================================================

/**
 * Fetch articles from a single RSS feed
 */
async function fetchFromFeed(feed: RSSFeed): Promise<Article[]> {
  try {
    console.log(`  Fetching from ${feed.name}...`);

    const result = await parser.parseURL(feed.url);
    const articles: Article[] = [];

    // Process each item in the feed
    for (const item of result.items.slice(0, FETCH_CONFIG.articlesPerFeed)) {
      const date = parseDate(item.pubDate || item.isoDate);

      // Skip articles that are too old
      if (!isRecentEnough(date)) continue;

      articles.push({
        title: cleanText(item.title, 200),
        summary: cleanText(item.contentSnippet || item.content || item.description, 300),
        link: item.link || '',
        date: date,
        source: feed.name,
        category: feed.category
      });
    }

    console.log(`    ✓ Found ${articles.length} recent articles`);
    return articles;

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error(`    ✗ Error fetching ${feed.name}: ${errorMessage}`);
    throw new Error(`Failed to fetch ${feed.name}: ${errorMessage}`);
  }
}

/**
 * Fetch articles from all configured RSS feeds
 * This is the main entry point for the fetch module
 */
export async function fetchAllNews(): Promise<FetchResult> {
  console.log('\n📰 Starting news fetch...\n');

  const allArticles: Article[] = [];
  const errors: string[] = [];

  // Fetch from each feed (in parallel for speed)
  const fetchPromises = RSS_FEEDS.map(async (feed) => {
    try {
      const articles = await fetchFromFeed(feed);
      return { success: true, articles };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      return { success: false, error: errorMessage, articles: [] };
    }
  });

  const results = await Promise.all(fetchPromises);

  // Collect results and errors
  for (const result of results) {
    if (result.success) {
      allArticles.push(...result.articles);
    } else if (result.error) {
      errors.push(result.error);
    }
  }

  // Sort by date (newest first)
  allArticles.sort((a, b) => b.date.getTime() - a.date.getTime());

  // Limit total articles
  const limitedArticles = allArticles.slice(0, FETCH_CONFIG.maxTotalArticles);

  console.log(`\n✅ Fetch complete: ${limitedArticles.length} articles collected`);
  if (errors.length > 0) {
    console.log(`⚠️  ${errors.length} feed(s) had errors`);
  }

  return {
    articles: limitedArticles,
    errors,
    timestamp: new Date()
  };
}

// =============================================================================
// Utility Exports
// =============================================================================

/**
 * Group articles by category
 * Useful for organizing the newsletter into sections
 */
export function groupByCategory(articles: Article[]): Map<string, Article[]> {
  const grouped = new Map<string, Article[]>();

  for (const article of articles) {
    const category = article.category || 'Other';
    const existing = grouped.get(category) || [];
    existing.push(article);
    grouped.set(category, existing);
  }

  return grouped;
}

/**
 * Group articles by source
 * Alternative grouping method
 */
export function groupBySource(articles: Article[]): Map<string, Article[]> {
  const grouped = new Map<string, Article[]>();

  for (const article of articles) {
    const existing = grouped.get(article.source) || [];
    existing.push(article);
    grouped.set(article.source, existing);
  }

  return grouped;
}
