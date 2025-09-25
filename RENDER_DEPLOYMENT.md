# Render.com Deployment Guide for Disaster Management Website

## 🚀 Complete Deployment Guide

### Prerequisites
- GitHub repository with your code
- Render.com account (free tier available)

## Part 1: API Backend Deployment

### Step 1: Create Web Service for API
1. Go to [render.com](https://render.com) and login
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository: `Safe-Edu`
4. Configure settings:
   ```
   Name: disaster-management-api
   Region: Oregon (US West) 
   Branch: main
   Root Directory: server
   Runtime: Node
   Build Command: npm install
   Start Command: npm start
   ```

### Step 2: Environment Variables for API
In Render dashboard, add:
```
NODE_ENV=production
PORT=10000
```

### Step 3: Deploy API
- Click **"Create Web Service"**
- Wait for deployment (5-10 minutes)
- Note your API URL: `https://disaster-management-api.onrender.com`

## Part 2: Frontend Deployment

### Step 1: Create Static Site
1. In Render dashboard, click **"New +"** → **"Static Site"**
2. Connect same repository: `Safe-Edu`
3. Configure settings:
   ```
   Name: disaster-management-frontend
   Branch: main
   Root Directory: (leave empty)
   Build Command: npm install && npm run build
   Publish Directory: dist
   ```

### Step 2: Environment Variables for Frontend
Add these in Render static site settings:
```
VITE_EMERGENCY_API_URL=https://your-actual-api-url.onrender.com/api/emergency-contacts
VITE_EMERGENCY_API_KEY=your-api-key-here
```

**⚠️ Important**: Replace `your-actual-api-url` with your real API service URL from Step 1.

### Step 3: Deploy Frontend  
- Click **"Create Static Site"**
- Wait for deployment (3-5 minutes)
- Your website will be live!

## 🔧 Post-Deployment Steps

1. **Test API Health**: Visit `https://your-api-url.onrender.com/health`
2. **Test Emergency Contacts**: Visit `https://your-api-url.onrender.com/api/emergency-contacts?state=Maharashtra`
3. **Test Frontend**: Visit your frontend URL and select different states

## 📋 Quick Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] API web service created on Render  
- [ ] API deployed successfully
- [ ] Frontend static site created
- [ ] Environment variables configured
- [ ] Frontend deployed with correct API URL
- [ ] Tested emergency contacts loading

## 🌐 Expected Results

After successful deployment:
- **API**: `https://disaster-management-api.onrender.com`
- **Frontend**: `https://disaster-management-frontend.onrender.com` 
- **Features**: All 36 states with complete emergency contacts
- **Performance**: Fast loading with API integration

## 🆘 Troubleshooting

**API Issues:**
- Build fails → Check Node.js version in logs
- 503 errors → Check /health endpoint
- CORS errors → API has CORS enabled

**Frontend Issues:**  
- Blank page → Check browser console for errors
- No emergency contacts → Verify API URL in environment variables
- Build fails → Check Vite build process

## 🎉 Success!

Your disaster management website is now live and serving emergency contacts for all Indian states! 🚀

---

*Need help? Check Render logs or contact support.*
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
