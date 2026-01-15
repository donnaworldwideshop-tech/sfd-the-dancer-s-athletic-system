#!/bin/bash

# SFD Shopify Theme Build Script
# This script creates a ZIP file ready for Shopify upload

echo "🚀 Building SFD Shopify Theme..."

# Set variables
THEME_NAME="sfd-horizon-theme"
BUILD_DIR="shopify"
OUTPUT_FILE="${THEME_NAME}.zip"

# Check if shopify directory exists
if [ ! -d "$BUILD_DIR" ]; then
    echo "❌ Error: shopify directory not found"
    exit 1
fi

# Create temporary directory for build
TEMP_DIR=$(mktemp -d)
THEME_DIR="${TEMP_DIR}/${THEME_NAME}"

echo "📦 Copying theme files..."

# Create theme structure
mkdir -p "${THEME_DIR}"/{assets,config,layout,locales,sections,snippets,templates}

# Copy files
cp -r ${BUILD_DIR}/assets/* "${THEME_DIR}/assets/" 2>/dev/null || true
cp -r ${BUILD_DIR}/config/* "${THEME_DIR}/config/" 2>/dev/null || true
cp -r ${BUILD_DIR}/layout/* "${THEME_DIR}/layout/" 2>/dev/null || true
cp -r ${BUILD_DIR}/sections/* "${THEME_DIR}/sections/" 2>/dev/null || true
cp -r ${BUILD_DIR}/snippets/* "${THEME_DIR}/snippets/" 2>/dev/null || true
cp -r ${BUILD_DIR}/templates/* "${THEME_DIR}/templates/" 2>/dev/null || true

# Create locales directory with default English locale if not exists
if [ ! -f "${THEME_DIR}/locales/en.default.json" ]; then
    echo '{"general":{"404":{"title":"Page not found"}}}' > "${THEME_DIR}/locales/en.default.json"
fi

# Remove any non-Shopify compatible files
find "${THEME_DIR}" -name ".DS_Store" -delete
find "${THEME_DIR}" -name "*.mp4" -delete  # Remove videos (too large for theme)
find "${THEME_DIR}" -name "Thumbs.db" -delete

echo "🗜️  Creating ZIP file..."

# Create ZIP file
cd "${TEMP_DIR}" || exit 1
zip -r "${OUTPUT_FILE}" "${THEME_NAME}" > /dev/null

# Move ZIP to project root
mv "${OUTPUT_FILE}" "${OLDPWD}/" || exit 1
cd "${OLDPWD}" || exit 1

# Cleanup
rm -rf "${TEMP_DIR}"

echo "✅ Theme built successfully!"
echo "📁 Output file: ${OUTPUT_FILE}"
echo ""
echo "📤 To upload to Shopify:"
echo "   1. Go to your Shopify Admin"
echo "   2. Navigate to Online Store > Themes"
echo "   3. Click 'Add theme' > 'Upload ZIP file'"
echo "   4. Select ${OUTPUT_FILE}"
echo ""
echo "🎉 Done!"
