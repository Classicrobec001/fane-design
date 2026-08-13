#!/usr/bin/env bash
# Generate the site favicon set from a single square source image.
#
# Usage: scripts/make-favicon.sh <source-image>
#
# Next's app-router file convention picks these up automatically — no <link>
# tags needed. The source should be square (the FD tile at 1000px+ is ideal);
# it is downscaled here because Next serves app/icon.png verbatim, and a
# multi-hundred-KB favicon is a pointless download on every page.

set -euo pipefail

SRC="${1:-}"
if [ -z "$SRC" ] || [ ! -f "$SRC" ]; then
  echo "usage: $0 <source-image>" >&2
  exit 1
fi

ROOT="$(cd "$(dirname "$0")/.." && pwd)"

# The FD tile carries a wide navy margin that renders the mark unreadable at
# 16px, so crop to the mark (plus ~10% breathing room) before downscaling.
# Tuned for the 1254px square source; drop CROP= to use the frame as-is.
CROP="crop=870:870:212:151,"

# app/icon.png      — browser tab + Google's SERP favicon (48px is what Google fetches)
# app/apple-icon.png — iOS home screen, needs 180px
ffmpeg -y -loglevel error -i "$SRC" -vf "${CROP}scale=192:192:flags=lanczos" "$ROOT/app/icon.png"
ffmpeg -y -loglevel error -i "$SRC" -vf "${CROP}scale=180:180:flags=lanczos" "$ROOT/app/apple-icon.png"

echo "wrote:"
ls -la "$ROOT/app/icon.png" "$ROOT/app/apple-icon.png"
