# Zentreks Newsletter Agent

A simple automated newsletter generator that fetches the latest AI and tech news from curated RSS feeds and creates a formatted newsletter draft.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run the newsletter generator:
```bash
npm run generate
```

Or use ts-node directly:
```bash
npx ts-node run.ts
```

## Output

The generated newsletter will be saved to:
```
output/newsletter-YYYY-MM-DD.md
```

## Configuration

Edit `config.ts` to:
- Add or remove RSS feed sources
- Change the number of articles to fetch
- Modify output format settings

## Project Structure

```
newsletter-agent/
├── config.ts              # Configuration settings
├── fetch-news.ts          # RSS feed fetcher
├── generate-newsletter.ts # Newsletter generator
├── run.ts                 # Entry point
├── package.json           # Dependencies
└── output/                # Generated newsletters
```

## How It Works

1. **Fetch News**: Pulls latest articles from configured RSS feeds (TechCrunch, MIT Tech Review, VentureBeat, The Verge, Wired)
2. **Parse & Structure**: Extracts title, summary, link, date, and source
3. **Categorize**: Groups articles by theme/category
4. **Format**: Creates a markdown newsletter with Zentreks commentary placeholders
5. **Save**: Outputs to timestamped markdown file

## Customization

### Adding New RSS Feeds

In `config.ts`, add to the `RSS_FEEDS` array:
```typescript
{
  name: 'Source Name',
  url: 'https://example.com/feed.xml',
  category: 'AI' // or 'Tech', 'Business', etc.
}
```

### Modifying Output Format

Adjust the `OUTPUT_CONFIG` in `config.ts` to change:
- Include/exclude summaries
- Include/exclude dates
- Change the maximum articles per source

## Future Enhancements

- [ ] Add AI-powered summarization
- [ ] Email integration (SendGrid, Mailchimp)
- [ ] Scheduled automation (cron)
- [ ] Custom commentary generation
- [ ] Multiple newsletter templates
