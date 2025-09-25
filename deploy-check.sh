#!/bin/bash

# Pre-deployment script for Render
echo "🚀 Preparing for Render deployment..."

# Ensure we're in the right directory
cd "$(dirname "$0")"

# Check if package.json exists
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found. Run this script from project root."
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo "🔧 Building application..."
npm run build

echo "🧪 Testing build..."
if [ -d "dist" ]; then
    echo "✅ Build successful - dist folder created"
    echo "📊 Build size:"
    du -sh dist/
else
    echo "❌ Build failed - no dist folder found"
    exit 1
fi

echo "🎉 Ready for Render deployment!"
echo ""
echo "📋 Next steps:"
echo "1. Push code to GitHub"
echo "2. Create Render static site"
echo "3. Set build command: npm install && npm run build"
echo "4. Set publish directory: dist"
echo "5. Add environment variables"