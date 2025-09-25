#!/bin/bash

echo "🧪 Testing Local API Server..."
echo

# Test health endpoint
echo "📊 Health Check:"
curl -s http://localhost:3002/health | python3 -m json.tool 2>/dev/null || echo "Health check failed"
echo

# Test states endpoint
echo "🗺️  Available States:"
curl -s http://localhost:3002/api/states | python3 -m json.tool 2>/dev/null || echo "States endpoint failed"
echo

# Test emergency contacts for Maharashtra
echo "📞 Emergency Contacts for Maharashtra:"
curl -s "http://localhost:3002/api/emergency-contacts?state=Maharashtra" | python3 -m json.tool 2>/dev/null || echo "Emergency contacts failed"
echo

echo "✅ API Testing Complete!"