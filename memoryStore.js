const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

class MemoryStore {
  constructor() {
    this.users = [];
    this.dataFile = path.join(__dirname, '../data/users.json');
    this.loadData();
  }

  loadData() {
    try {
      if (fs.existsSync(this.dataFile)) {
        const data = fs.readFileSync(this.dataFile, 'utf8');
        this.users = JSON.parse(data);
      }
    } catch (err) {
      console.log('Starting with empty user store');
      this.users = [];
    }
  }

  saveData() {
    try {
      const dataDir = path.dirname(this.dataFile);
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      fs.writeFileSync(this.dataFile, JSON.stringify(this.users, null, 2));
    } catch (err) {
      console.error('Error saving data:', err);
    }
  }

  async findOne(query) {
    if (query.email) {
      return this.users.find(user => user.email === query.email) || null;
    }
    if (query._id) {
      return this.users.find(user => user._id === query._id) || null;
    }
    return null;
  }

  async create(userData) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const newUser = {
      _id: Date.now().toString(),
      ...userData,
      password: hashedPassword,
      createdAt: new Date().toISOString()
    };
    this.users.push(newUser);
    this.saveData();
    
    // Return user object with matchPassword method
    const userObj = { ...newUser };
    userObj.matchPassword = async function(enteredPassword) {
      return await bcrypt.compare(enteredPassword, this.password);
    };
    return userObj;
  }

  async findById(id) {
    const user = this.users.find(user => user._id === id) || null;
    if (user) {
      user.matchPassword = async function(enteredPassword) {
        return await bcrypt.compare(enteredPassword, this.password);
      };
    }
    return user;
  }
}

const memoryStore = new MemoryStore();

// Mock mongoose methods for compatibility
const mockUser = {
  findOne: memoryStore.findOne.bind(memoryStore),
  create: memoryStore.create.bind(memoryStore),
  findById: memoryStore.findById.bind(memoryStore)
};

module.exports = mockUser;
