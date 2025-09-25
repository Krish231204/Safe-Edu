import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(cors());
app.use(express.json());

// Load emergency contacts data
let emergencyData = null;

async function loadEmergencyData() {
  try {
    const dataPath = path.join(__dirname, '../public/emergency-contacts.json');
    const rawData = await fs.readFile(dataPath, 'utf8');
    emergencyData = JSON.parse(rawData);
    console.log('✅ Emergency contacts data loaded successfully');
    console.log(`📊 States available: ${Object.keys(emergencyData).filter(key => key !== 'default').length}`);
  } catch (error) {
    console.error('❌ Error loading emergency data:', error);
    process.exit(1);
  }
}

// API Routes

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    availableStates: Object.keys(emergencyData).filter(key => key !== 'default').length
  });
});

// Get all available states
app.get('/api/states', (req, res) => {
  try {
    const states = Object.keys(emergencyData).filter(key => key !== 'default');
    res.json({
      success: true,
      states: states.sort(),
      count: states.length
    });
  } catch (error) {
    console.error('Error fetching states:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch states' 
    });
  }
});

// Get emergency contacts by state
app.get('/api/emergency-contacts', (req, res) => {
  try {
    const { state } = req.query;
    
    if (!state) {
      return res.status(400).json({ 
        success: false, 
        error: 'State parameter is required' 
      });
    }

    // Check if state exists in data
    const stateData = emergencyData[state] || emergencyData['default'];
    
    if (!stateData) {
      return res.status(404).json({ 
        success: false, 
        error: `No data found for state: ${state}` 
      });
    }

    console.log(`📞 Emergency contacts requested for: ${state}`);

    res.json({
      success: true,
      state: state,
      categories: stateData.categories,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Error fetching emergency contacts:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Internal server error' 
    });
  }
});

// Get specific category for a state
app.get('/api/emergency-contacts/:state/:category', (req, res) => {
  try {
    const { state, category } = req.params;
    
    const stateData = emergencyData[state] || emergencyData['default'];
    
    if (!stateData) {
      return res.status(404).json({ 
        success: false, 
        error: `No data found for state: ${state}` 
      });
    }

    const categoryData = stateData.categories.find(
      cat => cat.category.toLowerCase() === category.toLowerCase()
    );

    if (!categoryData) {
      return res.status(404).json({ 
        success: false, 
        error: `Category '${category}' not found for state: ${state}` 
      });
    }

    console.log(`📋 ${category} contacts requested for: ${state}`);

    res.json({
      success: true,
      state: state,
      category: categoryData,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Error fetching category data:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Internal server error' 
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ 
    success: false, 
    error: 'Internal server error' 
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    success: false, 
    error: 'Endpoint not found',
    availableEndpoints: [
      'GET /health',
      'GET /api/states',
      'GET /api/emergency-contacts?state={state}',
      'GET /api/emergency-contacts/{state}/{category}'
    ]
  });
});

// Start server
async function startServer() {
  await loadEmergencyData();
  
  app.listen(PORT, () => {
    console.log('\n🚀 Disaster Management API Server Started!');
    console.log(`🌐 Server running on: http://localhost:${PORT}`);
    console.log(`🏥 Health check: http://localhost:${PORT}/health`);
    console.log(`📊 States list: http://localhost:${PORT}/api/states`);
    console.log(`📞 Emergency contacts: http://localhost:${PORT}/api/emergency-contacts?state=Maharashtra`);
    console.log('\n📋 Available API Endpoints:');
    console.log('  • GET /health - Server health check');
    console.log('  • GET /api/states - List all available states');
    console.log('  • GET /api/emergency-contacts?state={state} - Get all contacts for a state');
    console.log('  • GET /api/emergency-contacts/{state}/{category} - Get specific category');
    console.log('\n✨ Ready to serve emergency contact data!\n');
  });
}

startServer().catch(error => {
  console.error('❌ Failed to start server:', error);
  process.exit(1);
});