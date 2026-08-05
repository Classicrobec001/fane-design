#!/usr/bin/env bash
# Copy the 12 portfolio images into every slot the site references.
#
# Usage: scripts/place-assets.sh <source-folder>
#
# The source folder must contain the 12 files under the canonical names in the
# left column below. Each source image is copied to every destination that
# lib/content.ts points at — several images fill more than one slot (a project
# thumbnail, a case-study section, a service gallery tile, a related-work card).

set -euo pipefail

SRC="${1:-}"
if [ -z "$SRC" ] || [ ! -d "$SRC" ]; then
  echo "usage: $0 <source-folder>" >&2
  exit 1
fi

ROOT="$(cd "$(dirname "$0")/.." && pwd)"

# canonical source name | destination paths (relative to public/assets/)
MAP=$(cat <<'TABLE'
fame-laundry-branding.png|works/fame-laundry/branding.png gallery/brand-design-1.png services/brand-design/work-2.png work-4.png
appetizing-delicacies-flyer.png|gallery/brand-design-3.png
yumee-treetz-flyer.png|services/brand-design/work-1.png gallery/brand-design-2.png
fame-laundry-app-screens.png|works/fame-laundry/mobile.png gallery/mobile-1.png services/mobile/work-3.png
bankie-budget-app.png|works/bankie/app.png projects/bankie.png services/mobile/work-2.png gallery/mobile-2.png
moderno-furniture-app.png|works/moderno/mobile.png projects/moderno.png services/mobile/work-1.png gallery/mobile-3.png work-1.png
fame-laundry-app-hand.png|works/fame-laundry/hero.png works/fame-laundry/end-to-end.png projects/fame-laundry.png services/product-design/work-1.png gallery/product-design-1.png
food-rush-figma-desk.png|works/food-rush/showcase.png projects/food-rush.png services/product-design/work-2.png gallery/product-design-2.png
zenvoy-logistics-app.png|works/zenvoy/app.png projects/zenvoy.png services/product-design/work-3.png gallery/product-design-3.png work-2.png
laferay-auto-parts-web.png|works/laferay/website.png projects/laferay.png services/web/work-1.png gallery/web-1.png work-3.png
portfolio-adabara-web.png|works/portfolio/website.png projects/portfolio.png services/web/work-2.png gallery/web-2.png
ectinum-productivity-web.png|works/ectinum/hero.png projects/ectinum.png services/web/work-3.png gallery/web-3.png
TABLE
)

placed=0
missing=0

while IFS='|' read -r name dests; do
  [ -z "$name" ] && continue
  if [ ! -f "$SRC/$name" ]; then
    echo "MISSING  $name"
    missing=$((missing + 1))
    continue
  fi
  for d in $dests; do
    mkdir -p "$ROOT/public/assets/$(dirname "$d")"
    cp "$SRC/$name" "$ROOT/public/assets/$d"
    echo "  -> assets/$d"
    placed=$((placed + 1))
  done
  echo "OK       $name"
done <<< "$MAP"

echo
echo "$placed file(s) placed, $missing source image(s) not found."
