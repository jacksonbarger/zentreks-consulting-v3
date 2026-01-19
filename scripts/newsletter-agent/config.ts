/**
 * Newsletter Agent Configuration
 *
 * This file contains all configurable settings for the newsletter generator.
 * Modify these values to customize the newsletter output.
 */

// =============================================================================
// RSS Feed Sources
// =============================================================================

export interface RSSFeed {
  name: string;        // Display name for the source
  url: string;         // RSS feed URL
  category: string;    // Category for grouping (AI, Tech, Business, etc.)
}

/**
 * Curated list of AI and tech news RSS feeds
 * Add or remove sources as needed
 */
export const RSS_FEEDS: RSSFeed[] = [
  {
    name: 'TechCrunch AI',
    url: 'https://techcrunch.com/category/artificial-intelligence/feed/',
    category: 'AI'
  },
  {
    name: 'MIT Technology Review',
    url: 'https://www.technologyreview.com/feed/',
    category: 'Tech'
  },
  {
    name: 'VentureBeat AI',
    url: 'https://venturebeat.com/category/ai/feed/',
    category: 'AI'
  },
  {
    name: 'The Verge',
    url: 'https://www.theverge.com/rss/index.xml',
    category: 'Tech'
  },
  {
    name: 'Wired',
    url: 'https://www.wired.com/feed/rss',
    category: 'Tech'
  }
];

// =============================================================================
// Fetch Settings
// =============================================================================

export const FETCH_CONFIG = {
  // Maximum number of articles to fetch per RSS feed
  articlesPerFeed: 5,

  // Total maximum articles in the final newsletter
  maxTotalArticles: 15,

  // Request timeout in milliseconds
  timeout: 10000,

  // Maximum age of articles to include (in days)
  maxAgeDays: 7
};

// =============================================================================
// Output Settings
// =============================================================================

export const OUTPUT_CONFIG = {
  // Include article summaries/descriptions
  includeSummary: true,

  // Include publication dates
  includeDate: true,

  // Include source attribution
  includeSource: true,

  // Maximum length for article summaries (characters)
  maxSummaryLength: 300,

  // Output directory (relative to this script)
  outputDir: './output',

  // Newsletter filename prefix
  filenamePrefix: 'newsletter'
};

// =============================================================================
// Newsletter Template Settings
// =============================================================================

export const TEMPLATE_CONFIG = {
  // Company name for branding
  companyName: 'Zentreks Consulting',

  // Newsletter title
  title: 'AI & Tech Weekly Digest',

  // Tagline/subtitle
  tagline: 'Your weekly roundup of the latest in AI and technology',

  // Include Zentreks commentary placeholders
  includeCommentary: true,

  // Footer text
  footer: `
---

**About Zentreks Consulting**

We help businesses navigate the AI revolution with strategic consulting,
implementation services, and ongoing support.

[Visit our website](https://zentreks.com) | [Contact us](mailto:hello@zentreks.com)

*This newsletter was automatically generated. Commentary and insights are added by our team.*
`
};

// =============================================================================
// Category Definitions
// =============================================================================

/**
 * Define how articles should be grouped in the newsletter
 * Priority determines the order of sections
 */
export const CATEGORIES = [
  { id: 'AI', name: 'Artificial Intelligence', priority: 1 },
  { id: 'Tech', name: 'Technology & Innovation', priority: 2 },
  { id: 'Business', name: 'Business & Strategy', priority: 3 },
  { id: 'Other', name: 'Other News', priority: 4 }
];
