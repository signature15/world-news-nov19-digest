/**
 * entry.png - the finished artifact this program ships - is a cream
 * newsprint broadsheet covering a single day, Thursday 19 November 2026,
 * on one 1024x1024 page.
 *
 * At the top sits the masthead with its red date tab naming the day.
 * Below it, a day-in-numbers strip runs the key figures: the ICJ's 9-6
 * genocide vote, Anthropic's $81bn IPO, the M5.7 quake off Kumamoto, and
 * UK inflation printing at 3.6%.
 *
 * The page then unfolds in three tiers of cards. Three hero cards lead
 * with the Shenzhen three-way summit, the ICJ Myanmar ruling, and
 * Anthropic's Nasdaq debut. Beneath them, five secondary cards carry the
 * next rank of stories, and seven tertiary cards fill out the middle of
 * the page.
 *
 * A band of twenty-four region-tagged evening briefs sweeps the rest of
 * the world before the date-check footer closes the edition, confirming
 * everything above belongs to the 19th and not the day before.
 */
import { copyFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = dirname(fileURLToPath(import.meta.url));
const source = join(repo, 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const target = join(outputDir, 'entry.png');
mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
console.log('entry.png copied to', target);
