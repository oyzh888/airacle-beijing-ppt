#!/bin/bash
# Airacle PPT — One-click deploy to Cloudflare Pages
# Usage: ./deploy.sh
#
# 环境变量 (首次需要设置):
#   CLOUDFLARE_API_TOKEN  — Cloudflare API Token
#   CLOUDFLARE_ACCOUNT_ID — Cloudflare Account ID (default: 962646ca76cefd64bd6be92080b6f080)

set -e

ACCOUNT_ID="${CLOUDFLARE_ACCOUNT_ID:-962646ca76cefd64bd6be92080b6f080}"
PROJECT="beijing-airacle"

if [ -z "$CLOUDFLARE_API_TOKEN" ]; then
  echo "❌ 请设置 CLOUDFLARE_API_TOKEN 环境变量"
  echo "   export CLOUDFLARE_API_TOKEN=your_token_here"
  exit 1
fi

echo "🚀 Deploying to Cloudflare Pages..."
echo "   Project: $PROJECT"
echo "   Domain:  beijing.airacle.tech"
echo ""

# Deploy current directory (only index.html + static assets)
npx wrangler pages deploy . \
  --project-name="$PROJECT" \
  --branch=main

echo ""
echo "✅ 部署完成!"
echo "   🔗 https://beijing.airacle.tech"
