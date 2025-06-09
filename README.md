# 🧠 AI-Powered Task Management System

A full-stack task management app that uses OpenAI to automatically summarize tasks and suggest priorities. Built with **Node.js + Express.js** for the backend and **React** for the frontend. Tasks are stored in **MongoDB**, and AI insights are generated using the **OpenAI GPT API**.

This project contains two parts:

- `backend`: Node.js + Express API with MongoDB and OpenAI integration
- `frontend`: React app that connects to the backend

ai-task-manager/
├── backend/ # Node.js + Express + MongoDB + OpenAI
└── frontend/ # React frontend


---

## 🚀 Features

- ✅ Create, view, and manage tasks
- 🤖 AI-generated task summary and priority
- 🧠 Uses OpenAI (GPT-3.5) for text processing
- 🗃️ Stores tasks in MongoDB
- 🔐 Optional JWT-based auth (easy to add)
- 💡 Clean and minimal UI using React

---

## 🛠️ Tech Stack

### 🔧 Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- OpenAI API
- dotenv
- CORS

### 🎨 Frontend
- React.js
- Axios
- CSS (custom styles or Tailwind ready)

---

## 📁 Folder Overview

### `backend/`

| File / Folder       | Purpose                                     |
|---------------------|---------------------------------------------|
| `Task.js`     | Mongoose schema for storing task data       |
| `controllers/`       | Logic to handle task creation and AI calls |
| `routes/taskRoutes.js` | API routes for tasks                    |
| `app.js`             | Main Express server                         |
| `.env`               | Stores OpenAI API key & DB URI              |

### `frontend/`

| File / Folder       | Purpose                                     |
|---------------------|---------------------------------------------|
| `src/App.js`         | Main React app with task input & display    |

---

## 🔧 How to Run Locally

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/ai-task-manager.git
cd ai-task-manager


