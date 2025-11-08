#!/bin/sh
# Build script that ensures environment variables are available
export VITE_API_URL=${VITE_API_URL:-http://localhost:4000}
echo "Building with VITE_API_URL=$VITE_API_URL"
npm install
npm run build

