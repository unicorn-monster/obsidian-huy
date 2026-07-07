#!/usr/bin/env bash
# Lưu 1 fact vào brain trong 1 bước, 0 model call (PDF principle #3):
# ghi sources/note-<date>-<hash8>.md + append dòng catalogue.
#
#   .brain/scripts/remember.sh "MaxPro bundle 2 đầu mài giá $39.99, test 07/07"
#
set -euo pipefail

VAULT="$(cd "$(dirname "$0")/../.." && pwd)"
FACT="${1:?usage: remember.sh \"fact text\"}"

DATE="$(date +%F)"
HASH="$(printf '%s' "$FACT$DATE" | shasum | cut -c1-8)"
SLUG="note-$DATE-$HASH"
FILE="$VAULT/sources/$SLUG.md"

# title = 10 từ đầu
TITLE="$(printf '%s' "$FACT" | awk '{for(i=1;i<=10&&i<=NF;i++)printf "%s ",$i}' | sed 's/ $//')"
[ "$(printf '%s' "$FACT" | wc -w)" -gt 10 ] && TITLE="$TITLE…"

cat > "$FILE" <<EOF
---
type: idea
date: $DATE
title: "$TITLE"
---

$FACT
EOF

# append catalogue row (path axis title date desc keywords)
DESC="$(printf '%s' "$FACT" | tr '\t\n' '  ' | cut -c1-220)"
printf 'sources/%s.md\tsource-idea\t%s\t%s\t%s\t%s\n' \
  "$SLUG" "$TITLE" "$DATE" "$DESC" "note,idea" >> "$VAULT/.brain/catalogue.tsv"

echo "saved: sources/$SLUG.md (+ catalogue)"
