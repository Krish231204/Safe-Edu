# Quick Reference - Render Settings

## API Backend (Web Service)
```
Name: disaster-management-api
Type: Web Service
Root Directory: server
Build: npm install
Start: npm start
Environment:
  NODE_ENV=production
  PORT=10000
```

## Frontend (Static Site)
```
Name: disaster-management-frontend
Type: Static Site
Root Directory: (empty)
Build: npm install && npm run build
Publish: dist
Environment:
  VITE_EMERGENCY_API_URL=https://your-api-url.onrender.com/api/emergency-contacts
```

## Deploy Order
1. API first (get URL)
2. Frontend second (use API URL)