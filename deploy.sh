#!/bin/bash

# BestSoftGuide Deployment Script for Hostinger

echo "🚀 Starting deployment to Hostinger..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build the application
echo "🔨 Building application..."
npm run generate

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Files ready for deployment in .output/public/"
    echo ""
    echo "Next steps:"
    echo "1. Upload the contents of .output/public/ to your Hostinger public_html folder"
    echo "2. Or use the GitHub Actions workflow for automatic deployment"
else
    echo "❌ Build failed!"
    exit 1
fi
