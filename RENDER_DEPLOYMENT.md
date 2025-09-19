# Emergency Contacts API for Render Deployment

## Current Status
- **Frontend**: Ready with state-specific emergency contacts
- **Backend**: Placeholder for Render deployment
- **Data**: Local JSON with Maharashtra, Delhi, Tamil Nadu contacts

## For Render Backend Setup

### 1. API Endpoint Structure
```
GET /api/emergency-contacts?state={stateName}
```

### 2. Expected Response Format
```json
{
  "categories": [
    {
      "category": "Police & Security",
      "color": "blue", 
      "contacts": [
        {
          "name": "Police Emergency",
          "number": "100", 
          "type": "National Emergency"
        }
      ]
    }
  ]
}
```

### 3. Environment Variables for Frontend
```bash
VITE_EMERGENCY_API_URL=https://your-render-app.onrender.com/api/emergency-contacts
VITE_EMERGENCY_API_KEY=your-api-key
```

### 4. Render Deployment Steps
1. Create new Web Service on Render
2. Connect your GitHub repo
3. Set build command: `npm install && npm run build` 
4. Set start command: `npm start`
5. Add environment variables in Render dashboard
6. Deploy and get your `.onrender.com` URL

### 5. Database Options for Render
- **PostgreSQL**: Render's managed database
- **MongoDB**: External (MongoDB Atlas)
- **JSON File**: Simple static data in repo

### 6. Backend Tech Stack Suggestions
- **Node.js + Express**: Simple REST API
- **Next.js API Routes**: Full-stack in one repo
- **Python + FastAPI**: If you prefer Python

The frontend is ready and will automatically switch from local mock data to your Render API once you update the `.env.local` file with your deployed URL.
