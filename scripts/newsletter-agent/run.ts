#!/usr/bin/env ts-node

/**
 * Newsletter Agent - Entry Point
 *
 * This is the main entry point for running the newsletter generator.
 * Run this script to fetch news and generate a newsletter draft.
 *
 * Usage:
 *   npx ts-node run.ts
 *
 * Or via npm:
 *   npm run generate
 */

import { generateNewsletter } from './generate-newsletter';

// =============================================================================
// Main Execution
// =============================================================================

async function main(): Promise<void> {
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║           Zentreks Newsletter Agent v1.0                   ║');
  console.log('║           AI & Tech News Aggregator                        ║');
  console.log('╚════════════════════════════════════════════════════════════╝');

  const startTime = Date.now();

  try {
    // Generate the newsletter
    const result = await generateNewsletter();

    const duration = ((Date.now() - startTime) / 1000).toFixed(2);

    console.log('\n────────────────────────────────────────────────────────────');
    console.log('                       Summary                              ');
    console.log('────────────────────────────────────────────────────────────');

    if (result.success) {
      console.log(`Status:     ✅ Success`);
      console.log(`Articles:   ${result.articleCount}`);
      console.log(`Output:     ${result.filepath}`);
      console.log(`Duration:   ${duration}s`);

      if (result.errors.length > 0) {
        console.log(`\nWarnings (${result.errors.length}):`);
        result.errors.forEach(err => console.log(`  - ${err}`));
      }

      console.log('\n💡 Next steps:');
      console.log('   1. Open the generated newsletter file');
      console.log('   2. Add Zentreks commentary and insights');
      console.log('   3. Review and edit as needed');
      console.log('   4. Send to subscribers!');

    } else {
      console.log(`Status:     ❌ Failed`);
      console.log(`Duration:   ${duration}s`);
      console.log(`\nErrors:`);
      result.errors.forEach(err => console.log(`  - ${err}`));

      process.exit(1);
    }

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error(`\n❌ Fatal error: ${errorMessage}`);
    process.exit(1);
  }
}

// Run the main function
main();
