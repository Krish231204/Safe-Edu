# 🚀 STEP-BY-STEP Render Deployment Guide

## ⚠️ IMPORTANT: Deploy in This Exact Order

### 📋 What You're Deploying:
1. **API Backend** (Web Service) - from `/server` directory
2. **Frontend Website** (Static Site) - from root directory

---

## 🎯 STEP 1: Deploy API Backend First

### 1.1 Create Web Service for API
1. Go to **[render.com](https://render.com)** dashboard
2. Click **"New +"** → **"Web Service"**
3. Connect repository: **"Safe-Edu"**

### 1.2 Configure API Service
```
Service Name: disaster-management-api
Region: Oregon (US West)
Branch: main
Root Directory: server          ← IMPORTANT: Must be "server"
Runtime: Node
Build Command: npm install
Start Command: npm start
```

### 1.3 Add Environment Variables
Click **"Environment"** and add:
```
NODE_ENV=production
PORT=10000
```

### 1.4 Deploy API
1. Click **"Create Web Service"**
2. Wait 5-10 minutes for deployment
3. **COPY YOUR API URL** - you'll need it for frontend
   - Should look like: `https://disaster-management-api.onrender.com`

### 1.5 Test API (Important!)
Visit these URLs to verify API works:
- Health: `https://your-api-url.onrender.com/health`
- States: `https://your-api-url.onrender.com/api/states`
- Emergency: `https://your-api-url.onrender.com/api/emergency-contacts?state=Maharashtra`

---

## 🎯 STEP 2: Deploy Frontend Website

### 2.1 Create Static Site for Frontend
1. In Render dashboard, click **"New +"** → **"Static Site"**
2. Connect same repository: **"Safe-Edu"**

### 2.2 Configure Frontend Site
```
Site Name: disaster-management-frontend  
Branch: main
Root Directory: (LEAVE EMPTY!)     ← IMPORTANT: Leave blank, NOT "server"
Build Command: npm install && npm run build
Publish Directory: dist
```

### 2.3 Add Environment Variable
Click **"Environment"** and add:
```
VITE_EMERGENCY_API_URL=https://disaster-management-api.onrender.com/api/emergency-contacts
```
**⚠️ Replace with your actual API URL from Step 1**

### 2.4 Deploy Frontend
1. Click **"Create Static Site"**
2. Wait 3-5 minutes for deployment
3. Your website will be live!

---

## ✅ STEP 3: Test Everything

### 3.1 Test API
- Visit: `https://your-api-url.onrender.com/health`
- Should see: `{"status":"healthy","availableStates":36}`

### 3.2 Test Frontend
- Visit your frontend URL
- Select different states from dropdown
- Verify emergency contacts load

---

## 🆘 Common Issues & Solutions

### API Deployment Issues:
- **"Build failed"** → Check Root Directory is set to "server"
- **"File not found"** → Make sure emergency-contacts.json exists in server/
- **"Port error"** → Ensure PORT environment variable is set to 10000

### Frontend Deployment Issues:
- **"dist not found"** → Make sure Root Directory is EMPTY (not "server")
- **"No emergency contacts"** → Check VITE_EMERGENCY_API_URL points to correct API
- **"Build failed"** → Make sure you're building from project root, not server/

---

## 🎉 Expected Results

After successful deployment:
- **API**: `https://disaster-management-api.onrender.com`
- **Frontend**: `https://disaster-management-frontend.onrender.com`
- **Features**: All 36 Indian states with emergency contacts
- **Global Access**: Your disaster management website live worldwide!

---

## 📞 Quick Test Commands

Test your API manually:
```bash
curl https://your-api-url.onrender.com/health
curl https://your-api-url.onrender.com/api/states
curl "https://your-api-url.onrender.com/api/emergency-contacts?state=Maharashtra"
```

---

**🚀 Follow these steps exactly and your deployment will succeed!**