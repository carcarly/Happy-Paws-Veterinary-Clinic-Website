#!/bin/bash

# Happy Paws Website - Quick Start Script
# This script launches the website in your browser

echo "🐾 Happy Paws Veterinary Clinic - Website Preview"
echo "=============================================="
echo ""
echo "Starting local web server on http://localhost:8000"
echo "Press Ctrl+C to stop the server"
echo ""

# Check if Python is available
if command -v python3 &> /dev/null; then
    echo "🚀 Using Python 3..."
    cd "$(dirname "$0")"
    python3 -m http.server 8000
# Check if Node.js is available
elif command -v node &> /dev/null; then
    echo "🚀 Using Node.js (checking for serve)..."
    if command -v npx &> /dev/null; then
        cd "$(dirname "$0")"
        npx serve
    else
        echo "❌ Please install serve: npm install -g serve"
        exit 1
    fi
# Check if PHP is available
elif command -v php &> /dev/null; then
    echo "🚀 Using PHP..."
    cd "$(dirname "$0")"
    php -S localhost:8000
else
    echo "❌ No web server found."
    echo "Please install one of:"
    echo "  - Python 3: python3 -m http.server 8000"
    echo "  - Node.js: npm install -g serve"
    echo "  - PHP: php -S localhost:8000"
    exit 1
fi
