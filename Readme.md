# Complete Backend Mega Project

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express.js">
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</p>

> A comprehensive backend mega project representing an older version of YouTube integrated with Twitter. This project covers most of the topics in backend development including authentication, database management, API design, file handling, real-time communication, and more.

## 📋 Table of Contents

- [Description](#description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Authentication](#authentication)
- [Real-time Features](#real-time-features)
- [File Upload & Streaming](#file-upload--streaming)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## 📖 Description

This is a **Complete Backend Mega Project** that implements core functionalities of a video-sharing platform similar to YouTube, combined with social networking features similar to Twitter. The project is designed to demonstrate and master most backend development concepts including:

- RESTful API design
- Authentication and authorization
- Database management (SQL/NoSQL)
- File handling (upload, storage, streaming)
- Real-time communication (WebSockets)
- Caching strategies
- Message queues
- Security best practices
- Performance optimization
- Error handling and logging

## ✨ Features

### Video Platform Features
- 📹 Video Upload & Processing
- ▶️ Video Streaming (HLS/DASH)
- 👁️ Video Views & Watch History
- 👍 Likes & Dislikes
- 💬 Video Comments & Replies
- 🔍 Video Search & Filtering
- 📊 Video Analytics
- 🎬 Video Playlists
- 🏷️ Video Tags & Categories

### Social Media Features (Twitter-like)
- 🐦 Posts/Tweets
- 👥 Followers & Following
- ❤️ Likes & Retweets
- 💬 Comments & Replies
- 🔔 Notifications
- 📱 User Profile Management
- 🔍 User Search
- 🖼️ Image/Media Attachments
- 📢 Hashtags & Mentions

### User Management
- 👤 User Registration & Login
- 🔐 JWT Authentication
- 🔒 Role-based Access Control (RBAC)
- 📧 Email Verification
- 🔑 Password Reset
- 👤 Profile Management
- 🎭 Account Settings

### Platform Features
- 📬 Inbox/Messaging System
- 🔔 Push Notifications
- 📊 Dashboard & Analytics
- ⚙️ System Settings
- 📝 Activity Logs
- 🛡️ Content Moderation
- 🌐 Multi-language Support

## 🛠 Tech Stack

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** JavaScript (ES6+)

### Database
- **Primary:** MongoDB (Mongoose ODM)
- **Cache:** Redis
- **Search:** Elasticsearch (optional)

### Authentication & Security
- **Auth:** JWT (JSON Web Tokens)
- **Password Hashing:** bcrypt
- **Validation:** Joi/Express-validator
- **Rate Limiting:** express-rate-limit
- **CORS:** cors

### File Storage
- **Local Storage:** Multer
- **Cloud Storage:** AWS S3 / Cloudinary (optional)
- **Video Processing:** FFmpeg

### Real-time Communication
- **WebSockets:** Socket.io
- **Events:** Node.js Events

### Additional Tools
- **Task Queue:** Bull/Redis
- **Email:** Nodemailer
- **Logging:** Winston/Morgan
- **Environment Variables:** dotenv

## 📁 Project Structure

```
complete-backend-mega-project/
├── src/
│   ├── config/              # Configuration files
│   │   ├── db.js           # Database connection
│   │   ├── redis.js        # Redis configuration
│   │   └── env.js          # Environment variables
│   ├── controllers/        # Controller functions
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── videoController.js
│   │   ├── postController.js
│   │   └── ...
│   ├── models/             # Database models
│   │   ├── User.js
│   │   ├── Video.js
│   │   ├── Post.js
│   │   ├── Comment.js
│   │   └── ...
│   ├── routes/             # API routes
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   ├── videoRoutes.js
│   │   ├── postRoutes.js
│   │   └── ...
│   ├── middleware/         # Custom middleware
│   │   ├── auth.js
│   │   ├── validation.js
│   │   ├── errorHandler.js
│   │   └── ...
│   ├── services/          # Business logic
│   │   ├── authService.js
│   │   ├── videoService.js
│   │   ├── notificationService.js
│   │   └── ...
│   ├── utils/             # Utility functions
│   │   ├── helpers.js
│   │   ├── validators.js
│   │   └── ...
│   ├── sockets/           # WebSocket handlers
│   │   ├── index.js
│   │   ├── notificationHandler.js
│   │   └── ...
│   ├── jobs/             # Background jobs
│   │   ├── videoProcessing.js
│   │   └── ...
│   ├── uploads/          # Uploaded files
│   ├── logs/             # Log files
│   ├── app.js           # Express app setup
│   └── server.js        # Server entry point
├── tests/               # Test files
├── .env.example        # Environment variables example
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local or Atlas)
- **Redis** (optional, for caching)
- **FFmpeg** (optional, for video processing)

### Installation

1. **Clone the repository:**
```
bash
git clone <repository-url>
cd complete-backend-mega-project
```

2. **Install dependencies:**
```
bash
npm install
```

3. **Set up environment variables:**
```
bash
cp .env.example .env
```

4. **Configure environment variables:**
Edit the `.env` file with your configuration:
```
env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/youtube-twitter-clone
MONGODB_USER=your_username
MONGODB_PASSWORD=your_password

# Redis Configuration
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=your_redis_password

# JWT Configuration
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=30d

# Email Configuration
EMAIL_SERVICE=gmail
EMAIL_USERNAME=your_email@gmail.com
EMAIL_PASSWORD=your_email_password
EMAIL_FROM=noreply@example.com

# Cloud Storage (Optional)
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_BUCKET_NAME=your_bucket_name
AWS_REGION=us-east-1

# Client URL
CLIENT_URL=http://localhost:3000
```

5. **Start the server:**
```
bash
# Development mode
npm run dev

# Production mode
npm start
```

6. **Verify the server:**
Open your browser and visit: `http://localhost:5000/api/v1/health`

## ⚙️ Configuration

### Database Connection

The application connects to MongoDB using Mongoose. You can configure the connection in `src/config/db.js`.

### Redis Cache

Redis is used for:
- Session caching
- API rate limiting
- Real-time notifications
- Video view counting

### File Storage

Configure file storage in `src/config/storage.js`:
- **Local:** Files stored in `uploads/` directory
- **Cloud:** AWS S3 or Cloudinary (set appropriate environment variables)

## 📡 API Endpoints

### Authentication Endpoints
```
POST   /api/v1/auth/register     - Register new user
POST   /api/v1/auth/login       - User login
POST   /api/v1/auth/logout      - User logout
POST   /api/v1/auth/refresh     - Refresh token
POST   /api/v1/auth/forgot      - Forgot password
POST   /api/v1/auth/reset       - Reset password
GET    /api/v1/auth/me          - Get current user
```

### User Endpoints
```
GET    /api/v1/users            - Get all users
GET    /api/v1/users/:id        - Get user by ID
PUT    /api/v1/users/:id        - Update user
DELETE /api/v1/users/:id        - Delete user
POST   /api/v1/users/follow/:id - Follow user
POST   /api/v1/users/unfollow/:id - Unfollow user
GET    /api/v1/users/followers  - Get followers
GET    /api/v1/users/following  - Get following
```

### Video Endpoints
```
GET    /api/v1/videos           - Get all videos
GET    /api/v1/videos/:id       - Get video by ID
POST   /api/v1/videos           - Upload video
PUT    /api/v1/videos/:id       - Update video
DELETE /api/v1/videos/:id       - Delete video
POST   /api/v1/videos/:id/like  - Like video
POST   /api/v1/videos/:id/view  - Increment view count
GET    /api/v1/videos/trending  - Get trending videos
GET    /api/v1/videos/search    - Search videos
```

### Post/Tweet Endpoints
```
GET    /api/v1/posts            - Get all posts
GET    /api/v1/posts/:id        - Get post by ID
POST   /api/v1/posts            - Create post
PUT    /api/v1/posts/:id        - Update post
DELETE /api/v1/posts/:id        - Delete post
POST   /api/v1/posts/:id/like   - Like post
POST   /api/v1/posts/:id/retweet - Retweet post
```

### Comment Endpoints
```
GET    /api/v1/comments         - Get comments
POST   /api/v1/comments         - Create comment
PUT    /api/v1/comments/:id     - Update comment
DELETE /api/v1/comments/:id     - Delete comment
POST   /api/v1/comments/:id/like - Like comment
```

### Notification Endpoints
```
GET    /api/v1/notifications    - Get notifications
PUT    /api/v1/notifications/:id/read - Mark as read
DELETE /api/v1/notifications/:id      - Delete notification
```

## 🗃️ Database Schema

### User Model
```
javascript
{
  username: String (unique, required),
  email: String (unique, required),
  password: String (hashed),
  avatar: String,
  bio: String,
  followers: [{ type: ObjectId, ref: 'User' }],
  following: [{ type: ObjectId, ref: 'User' }],
  isVerified: Boolean,
  role: String (enum: ['user', 'admin']),
  createdAt: Date,
  updatedAt: Date
}
```

### Video Model
```
javascript
{
  title: String (required),
  description: String,
  videoUrl: String (required),
  thumbnailUrl: String,
  uploader: { type: ObjectId, ref: 'User' },
  views: Number,
  likes: [{ type: ObjectId, ref: 'User' }],
  dislikes: [{ type: ObjectId, ref: 'User' }],
  comments: [{ type: ObjectId, ref: 'Comment' }],
  tags: [String],
  category: String,
  duration: Number,
  status: String (enum: ['pending', 'approved', 'rejected']),
  createdAt: Date,
  updatedAt: Date
}
```

### Post Model
```
javascript
{
  author: { type: ObjectId, ref: 'User' },
  content: String (required),
  media: [{
    type: String,
    url: String
  }],
  likes: [{ type: ObjectId, ref: 'User' }],
  retweets: [{ type: ObjectId, ref: 'User' }],
  replies: [{ type: ObjectId, ref: 'Post' }],
  hashtags: [String],
  mentions: [String],
  createdAt: Date,
  updatedAt: Date
}
```

### Comment Model
```
javascript
{
  content: String (required),
  author: { type: ObjectId, ref: 'User' },
  video: { type: ObjectId, ref: 'Video' },
  post: { type: ObjectId, ref: 'Post' },
  parentComment: { type: ObjectId, ref: 'Comment' },
  likes: [{ type: ObjectId, ref: 'User' }],
  createdAt: Date,
  updatedAt: Date
}
```

### Notification Model
```
javascript
{
  recipient: { type: ObjectId, ref: 'User' },
  sender: { type: ObjectId, ref: 'User' },
  type: String (enum: ['like', 'comment', 'follow', 'mention', 'retweet']),
  message: String,
  link: String,
  isRead: Boolean,
  createdAt: Date
}
```

## 🔐 Authentication

The application uses JWT (JSON Web Tokens) for authentication:

1. **Registration:** Users register with username, email, and password
2. **Login:** Users receive JWT access token and refresh token
3. **Authorization:** Protected routes require valid JWT token
4. **Token Refresh:** Refresh token endpoint for session extension

### Middleware
- `auth.js` - Verifies JWT token
- `checkRole.js` - Verifies user role (admin/user)
- `validate.js` - Request validation

## 🔄 Real-time Features

Using Socket.io for real-time communication:

- **Live Notifications:** Instant notifications for likes, comments, follows
- **Live Comments:** Real-time comment updates on videos/posts
- **Online Status:** User online/offline status
- **Typing Indicators:** Show when users are typing
- **Message Delivery:** Real-time direct messaging

### Socket Events
```
javascript
// Client-side
socket.emit('join', userId);
socket.on('notification', (data) => { ... });
socket.on('newComment', (data) => { ... });

// Server-side
io.on('connection', (socket) => { ... });
io.to(userId).emit('notification', data);
```

## 📤 File Upload & Streaming

### Video Upload
- Multer for multipart form-data handling
- File validation (type, size)
- Chunked upload support for large files
- Progress tracking

### Video Processing
- FFmpeg for video transcoding
- Multiple quality options (360p, 720p, 1080p)
- Thumbnail generation
- HLS/DASH streaming preparation

### Storage Options
- Local filesystem (development)
- AWS S3 (production)
- Cloudinary (alternative)

## 🧪 Testing

Run tests to ensure code quality:

```
bash
# Run all tests
npm test

# Run specific test file
npm test -- tests/auth.test.js

# Run with coverage
npm test -- --coverage
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please make sure to update tests as appropriate.

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Divyanshu Bindal**

- GitHub: [Divyanshu281]
- Email: [divyanshubindal76@gmail.com]

---

<p align="center">
  Made with ❤️ by Divyanshu Bindal
</p>

<p align="center">
  <sub>⭐ Star this repository if you found it helpful!</sub>
</p>
