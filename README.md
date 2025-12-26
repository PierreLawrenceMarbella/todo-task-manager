# Personal To-Do Task Manager

## 📌 Project Description

A full-stack Personal To-Do Task Manager built using Node.js, Express, MongoDB, and a modern HTML/CSS/JavaScript frontend.  
The application allows users to register, log in, and manage tasks with different priority levels through an intuitive and responsive user interface.

This project was developed as part of the **Application Development and Emerging Technologies Final Project**.

---

## 🚀 Features

- **User Authentication**

  - User Registration with secure password hashing (bcrypt)
  - User Login with JWT token authentication
  - Session persistence using localStorage

- **Task Management**

  - ➕ Add new tasks with priority levels
  - ✏️ Edit existing tasks
  - 🗑️ Delete tasks
  - ✅ Mark tasks as complete/incomplete

- **Search & Filters**

  - 🔍 Real-time search by task title
  - 📊 Filter tasks by priority (Low, Medium, High)
  - 📋 Filter tasks by status (All, Active, Completed)
  - 🔄 Clear all filters with one click
  - 📈 Results counter showing filtered task count

- **Priority Levels**

  - 🟢 Low Priority
  - 🟡 Medium Priority
  - 🔴 High Priority

- **Security**

  - Protected API routes using JWT middleware
  - Password encryption with bcrypt.js
  - CORS enabled for cross-origin requests

- **Modern UI**
  - Responsive design
  - Beautiful gradient theme
  - Smooth animations and transitions

---

## 🛠 Tech Stack

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB Atlas** - Cloud database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication tokens
- **bcrypt.js** - Password hashing
- **cors** - Cross-origin resource sharing
- **dotenv** - Environment variables

### Frontend

- **HTML5** - Structure
- **CSS3** - Styling with modern features
- **JavaScript (ES6+)** - Client-side logic
- **Fetch API** - HTTP requests

---

## 📁 Project Structure

```
todo-task-manager/
├── config/
│   └── db.js              # MongoDB connection configuration
├── frontend/
│   └── index.html         # Frontend application (HTML/CSS/JS)
├── middleware/
│   └── authMiddleware.js  # JWT authentication middleware
├── models/
│   ├── Task.js            # Task model schema
│   └── User.js            # User model schema
├── routes/
│   ├── auth.js            # Authentication routes (register/login)
│   └── tasks.js           # Task CRUD routes
├── .env                   # Environment variables (not in repo)
├── .gitignore             # Git ignore file
├── package.json           # Project dependencies
├── README.md              # Project documentation
└── server.js              # Main server entry point
```

---

## ⚙️ Installation & Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB Atlas](https://www.mongodb.com/atlas) account (or local MongoDB)
- Git

### 1. Clone the repository

```bash
git clone https://github.com/PierreLawrenceMarbella/todo-task-manager.git
cd todo-task-manager
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create environment variables

Create a `.env` file in the root directory with the following:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

**Example:**

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/todo-task-manager
JWT_SECRET=mysupersecretkey123
PORT=5000
```

---

## 🚀 Running the Application

### Start the Backend Server

**For Production:**

```bash
npm start
```

**For Development (with auto-reload):**

```bash
npm run dev
```

You should see:

```
Server running on port 5000
MongoDB Connected
```

### Open the Frontend

**Option 1: Direct File**

- Navigate to `frontend/index.html`
- Double-click to open in your browser

**Option 2: VS Code Live Server**

- Install the "Live Server" extension in VS Code
- Right-click on `frontend/index.html`
- Select "Open with Live Server"

---

## 📡 API Endpoints

### Authentication

| Method | Endpoint             | Description             |
| ------ | -------------------- | ----------------------- |
| POST   | `/api/auth/register` | Register a new user     |
| POST   | `/api/auth/login`    | Login and get JWT token |

### Tasks (Protected - Requires JWT)

| Method | Endpoint         | Description                      |
| ------ | ---------------- | -------------------------------- |
| GET    | `/api/tasks`     | Get all tasks for logged-in user |
| POST   | `/api/tasks`     | Create a new task                |
| PUT    | `/api/tasks/:id` | Update a task                    |
| DELETE | `/api/tasks/:id` | Delete a task                    |

---

## 🎯 Usage

1. **Register** - Create a new account with username, email, and password
2. **Login** - Sign in with your email and password
3. **Add Tasks** - Enter task title and select priority level
4. **Manage Tasks** - Edit, delete, or mark tasks as complete
5. **Logout** - Click logout to end your session
