# Post System

A full-stack web application designed for creating and creating posts with images and captions.

## 🚀 Features

- **Create Post**: Upload an image and add a caption to create a new post.
- **Feed**: View a chronological feed of all posts.
- **Image Storage**: Images are securely uploaded and hosted via [ImageKit](https://imagekit.io/).
- **Database**: Post metadata (image URL, caption, timestamps) is stored in MongoDB.

## 🛠️ Tech Stack

### Frontend
- **Framework**: React (Vite)
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **HTTP Client**: Axios

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose)
- **File Handling**: Multer
- **Image Service**: ImageKit

## 📂 Project Structure

```
post-system/
├── backend/          # Node.js/Express Server
│   ├── src/
│   │   ├── model/    # Mongoose Schemas
│   │   ├── services/ # External services (ImageKit)
│   │   ├── db/       # Database connection
│   │   └── app.js    # Express App setup
│   ├── server.js     # Server entry point
│   └── ...
├── frontend/         # React Application
│   ├── src/
│   │   ├── pages/    # Page components (Feed, CreatePost)
│   │   └── ...
│   └── ...
└── README.md
```

## ⚙️ Usage & Installation

### Prerequisites
- Node.js installed
- MongoDB installed (or a MongoDB Atlas URI)
- ImageKit account (for image upload functionality)

### 1. Backend Setup

Navigate to the `backend` directory:
```bash
cd backend
```

Install dependencies:
```bash
npm install
```

Create a `.env` file in the `backend` directory with the following variables:
```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
# Note: ImageKit credentials are currently configured in src/services/storage.service.js
```

Start the server:
```bash
npm start
# or
node server.js
```
The server will run on `http://localhost:3000`.

### 2. Frontend Setup

Navigate to the `frontend` directory:
```bash
cd frontend
```

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

Open your browser and navigate to the local URL provided by Vite (usually `http://localhost:5173`).

## 📝 Recent Updates

- **MongoDB Connection**: Resolved connection issues and stabilized database connectivity.
- **Environment Configuration**: Fixed `.env` file loading for secure variable management.
- **Image Upload Integration**: Implemented ImageKit service for reliable image hosting.
