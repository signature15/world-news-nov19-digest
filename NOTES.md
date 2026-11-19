# Design notes

## Design notes

These notes explain the layout decisions behind `entry.png`, the 1024x1024
broadsheet poster for Thursday 19 November 2026. The page is a one-day world
news digest: all 38 stories on it - the 3 hero cards, 5 secondary cards,
6 tertiary cards, and 24 evening briefs - were reported or first published
on Thursday 19 November 2026, and the layout exists to give that one day the
shape and density of a real newspaper front page rather than a summary list.

**Why cream paper.** The background is newsprint cream, not white, because the
page is arguing that it is a newspaper front page; cream stock reads instantly
as print, keeps the black nameplate and hairline rules feeling inked rather
than rendered, and is far gentler than pure white for a page this dense. It
also lets the few saturated elements - the red tab, the region bars, the
purple and blue section rules - carry all the color on the page, so the eye
always lands on something deliberate.

**Why the red date tab.** The deep-red block in the top-left corner holding
"19 / NOV 2026" is the single highest-contrast object on the page, placed
where a reader's eye enters first. The contest's core requirement is that the
image be about one specific day, so the date is not typeset like ordinary
copy - it is stamped, like the corner box on a real front page. Red on cream
also echoes the classic red masthead accents of twentieth-century dailies.

**Why an eight-cell numbers strip.** Broadspapers open with the day's figures,
and a single row of eight cells (the 9-6 ICJ vote, the $81bn IPO price, the
$2tn open, the M5.7 quake, 3.6% inflation, EUR45bn, the 6-51 spell, 56-44)
gives the reader the whole day's shape in five seconds of scanning. Eight was
the largest count that fits one legible row at 1024px; the mix of vote
counts, money, magnitudes, and scores forces the strip to span politics,
courts, markets, science, and sport before any prose appears.

**How stories were ranked.** Every story was scored for breadth and weight,
then cut into four tiers: the three heroes are the day's events with global
consequence (the Shenzhen three-leader declaration, the ICJ Myanmar genocide
ruling, the Anthropic IPO); the five secondary cards are major but narrower
stories (Berlin allies' warning, the Kumamoto quake, FOMC minutes, Gemini 4
Neon, the Nvidia export halt); the six tertiary cards compress stories to a
headline and source only; and the twenty-four evening briefs strip each
remaining item to one region-tagged line. Ranking was guided by region
balance - the colored bar under the masthead shows 8/8/7/7/3/3/2 across Asia,
Europe, Africa, the Americas, US, Oceania, and Middle East - so no region's
day is crowded out by another's.

**Why the date-check footer exists.** The footer is the page's provenance
line. It states that 19 November 2026 is a Thursday, names the carryover
items deliberately excluded as not-Thursday (the Myanmar fighting, Gaza push,
and 144-drone Kyiv attack, all Wednesday), attributes every source, and notes
that disputed claims are attributed rather than asserted. On a page claiming
"everything on this page happened or was first reported today," the footer is
what makes that claim checkable instead of decorative.

## Sources

- Reuters
- AP
- AFP
- BBC
- Bloomberg
- Kyodo
- ICJ
- USGS
- ONS
