#!/bin/bash

echo "🧪 TESTING: Is this the API or Frontend directory?"
echo

if [ -f "server.js" ]; then
    echo "📍 LOCATION: This is the API SERVER directory (/server)"
    echo "🔧 DEPLOY AS: Web Service"
    echo "📦 BUILD: npm install"  
    echo "🚀 START: npm start"
    echo "📂 ROOT DIR: server"
    echo
    echo "✅ This should be deployed as WEB SERVICE, not Static Site!"
elif [ -f "package.json" ] && [ -f "index.html" ]; then
    echo "📍 LOCATION: This is the FRONTEND directory (root)"
    echo "🔧 DEPLOY AS: Static Site"
    echo "📦 BUILD: npm install && npm run build"
    echo "📁 PUBLISH: dist"
    echo "📂 ROOT DIR: (empty)"
    echo  
    echo "✅ This should be deployed as STATIC SITE, not Web Service!"
else
    echo "❓ UNKNOWN: Can't determine directory type"
    echo "📂 Contents:"
    ls -la
fi

echo
echo "🎯 REMEMBER: You need TWO separate deployments!"
echo "   1. API Server (Web Service from /server)"  
echo "   2. Frontend (Static Site from root)"