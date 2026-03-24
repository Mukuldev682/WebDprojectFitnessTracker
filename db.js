const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB Connected:', process.env.MONGO_URI);
  } catch (err) {
    console.error('❌ MongoDB Connection Error:', err.message);
    console.error('⚠️  Using file-based storage fallback - some features may be limited');
    
    // Create a simple file-based storage fallback
    const dataDir = path.join(__dirname, '../data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    // Don't exit process, continue without DB
    // The app will handle this gracefully
  }
};

module.exports = connectDB;
