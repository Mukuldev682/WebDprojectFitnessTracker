# WebDprojectFitnessTracker
# 💪 Real-Time Fitness Tracker

A modern web application that connects to Fitbit to display real-time fitness data with live updates via WebSocket connections.

## Features

- **Real-Time Data Streaming**: Live fitness updates using Socket.IO
- **Fitbit Integration**: OAuth 2.0 authentication with Fitbit Web API
- **Beautiful UI**: Modern, responsive design with gradient backgrounds and smooth animations
- **Activity Tracking**: Monitor steps, calories, heart rate, distance, and duration
- **Session Management**: Secure user sessions with Express
- **Live Status Indicators**: Visual feedback for connection and authentication status

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Socket.IO** - Real-time WebSocket communication
- **Passport.js** - Authentication middleware
- **Passport-Fitbit-OAuth2** - Fitbit OAuth strategy
- **Express-Session** - Session management
- **MongoDB** - Database (optional for data persistence)
- **Mongoose** - MongoDB ODM

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and animations
- **JavaScript (ES6+)** - Client-side logic
- **Socket.IO Client** - Real-time data reception

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (optional, for data persistence)
- Fitbit Developer Account

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fullstack(project)
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` file with your Fitbit credentials:
   ```env
   FITBIT_CLIENT_ID=your_fitbit_client_id
   FITBIT_CLIENT_SECRET=your_fitbit_client_secret
   FITBIT_REDIRECT_URI=http://localhost:3000/auth/fitbit/callback
   ```

4. **(Optional) Set up MongoDB**
   ```bash
   # Make sure MongoDB is running on localhost:27017
   mongod
   ```

5. **Start the server**
   ```bash
   node "server (1).js"
   ```

6. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🔐 Fitbit Setup

1. **Create a Fitbit Developer Account**
   - Visit [Fitbit Dev Portal](https://dev.fitbit.com/)
   - Sign up or log in

2. **Register a New App**
   - Go to "Manage Apps" → "Register a New App"
   - Fill in the required information:
     - **App Name**: Real-Time Fitness Tracker
     - **Description**: Your app description
     - **Application Type**: Personal
     - **Callback URL**: `http://localhost:3000/auth/fitbit/callback`
     - **Default Access Type**: Read-Only

3. **Get Your Credentials**
   - Note down your **Client ID** and **Client Secret**
   - Add them to your `.env` file

## 📱 Usage

1. **Connect to Fitbit**
   - Click the "🔗 Connect Fitbit" button
   - Authorize the application on Fitbit
   - You'll be redirected back to the app

2. **View Real-Time Data**
   - Once connected, the app will display live fitness data
   - Activities update in real-time
   - View metrics like steps, calories, heart rate, distance, and duration

3. **Monitor Connection Status**
   - Green status: Connected to server
   - Red status: Disconnected from server
   - Fitbit status shows authentication state

## 🎨 UI Features

- **Gradient Backgrounds**: Modern visual design
- **Activity Cards**: Organized display of fitness data
- **Metric Grid**: Clean layout for different measurements
- **Hover Effects**: Interactive elements with smooth transitions
- **Status Indicators**: Clear visual feedback
- **Responsive Design**: Works on all screen sizes

## 📊 Data Metrics

The app tracks and displays:
- 👟 **Steps**: Daily step count
- 🔥 **Calories**: Calories burned
- ❤️ **Heart Rate**: BPM measurements
- 📍 **Distance**: Distance in kilometers
- ⏱️ **Duration**: Activity duration in seconds

## 🔧 API Endpoints

### Authentication
- `GET /auth/fitbit` - Initiate Fitbit OAuth flow
- `GET /auth/fitbit/callback` - OAuth callback handler
- `GET /auth/status` - Check authentication status

### Data (if MongoDB is enabled)
- `GET /api/data` - Get fitness data
- `POST /api/data` - Store fitness data

### WebSocket Events
- `fitnessUpdate` - Real-time fitness data updates
- `connect` - Server connection established
- `disconnect` - Server connection lost

## 🗂️ Project Structure

```
fullstack(project)/
├── server (1).js          # Main server file
├── index.html             # Frontend HTML
├── script (1).js          # Frontend JavaScript
├── db (1).js              # Database connection
├── dataRoutes (1).js      # API routes
├── socket (1).js          # Socket handlers
├── apiService (1).js      # Fitbit API service
├── dataController (1).js  # Data controller
├── package.json           # Dependencies
├── .env                   # Environment variables
└── README.md              # This file
```

## 🐛 Troubleshooting

### Common Issues

1. **"Cannot find module" error**
   ```bash
   npm install
   ```

2. **MongoDB connection error**
   - Comment out `connectDB()` in server file if not using MongoDB
   - Or start MongoDB service: `mongod`

3. **Fitbit OAuth error**
   - Verify callback URL matches exactly in Fitbit developer portal
   - Check Client ID and Client Secret in `.env` file

4. **Socket connection issues**
   - Ensure server is running on port 3000
   - Check browser console for errors

### Development Tips

- Use browser developer tools to debug WebSocket connections
- Check server logs for authentication flow
- Test with Postman for API endpoints

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Fitbit Web API](https://dev.fitbit.com/) for fitness data
- [Socket.IO](https://socket.io/) for real-time communication
- [Express.js](https://expressjs.com/) for the web framework
- [Passport.js](https://www.passportjs.org/) for authentication

## 📞 Support

If you have any questions or issues, please:
- Open an issue on GitHub
- Check the troubleshooting section
- Review the Fitbit API documentation

---

**Built with ❤️ for fitness enthusiasts**

