# Disaster Management API

RESTful API server for emergency contacts across Indian states and Union Territories.

## 🚀 Features

- **36 States/UTs Coverage**: Complete emergency contacts for all Indian states
- **Multiple Categories**: Police, Medical, Fire & Rescue services
- **State-specific Data**: Localized emergency numbers and services
- **CORS Enabled**: Works with frontend applications
- **Health Monitoring**: Built-in health check endpoint

## 📋 API Endpoints

### Health Check
```
GET /health
```
Returns server status and available states count.

### Get All States
```
GET /api/states
```
Returns list of all 36 available states and UTs.

### Get Emergency Contacts
```
GET /api/emergency-contacts?state={stateName}
```
Returns all emergency contact categories for specified state.

### Get Specific Category
```
GET /api/emergency-contacts/{state}/{category}
```
Returns specific category contacts for a state.

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Start server
npm start

# Development with auto-reload
npm run dev
```

Server runs on `http://localhost:3002`

## 🌐 Production Deployment

Designed for easy deployment on Render.com:

1. **Environment Variables**:
   - `NODE_ENV=production`
   - `PORT=10000`

2. **Build Commands**:
   - Build: `npm install`
   - Start: `npm start`

## 📊 Data Coverage

Complete emergency contacts for:
- **28 States**: All major Indian states
- **8 Union Territories**: Including J&K, Ladakh, Delhi, etc.
- **3 Categories per location**: Police, Medical, Fire services
- **Specialized Services**: Mountain rescue, marine emergency, tribal health

## 🛡️ Error Handling

- Graceful fallbacks for missing data
- Proper HTTP status codes
- CORS configuration for web apps
- Request logging and monitoring

---

**Ready for production deployment!** 🚀