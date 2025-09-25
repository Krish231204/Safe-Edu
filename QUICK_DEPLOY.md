# 🚀 Quick Deployment Guide

## Steps to Deploy on Render.com

### 1. Push to GitHub
```bash
git add .
git commit -m "Add Render deployment configuration"
git push origin main
```

### 2. Deploy API First
1. Go to [render.com](https://render.com)
2. Create **Web Service**
3. Connect repository: `Safe-Edu`
4. Settings:
   - Root Directory: `server`
   - Build: `npm install` 
   - Start: `npm start`
5. Add environment variables:
   - `NODE_ENV=production`
   - `PORT=10000`

### 3. Deploy Frontend
1. Create **Static Site**
2. Connect same repository
3. Settings:
   - Build: `npm install && npm run build`
   - Publish: `dist`
4. Add environment variable:
   - `VITE_EMERGENCY_API_URL=https://your-api-url.onrender.com/api/emergency-contacts`

### 4. Test
- Visit your frontend URL
- Select different states
- Verify emergency contacts load

---

**🎉 Your disaster management website will be live!**