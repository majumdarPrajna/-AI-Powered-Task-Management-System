import React, { useState, useEffect } from "react";
import axios from "axios";

const API_BASE = "http://localhost:5000/api";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch tasks from backend
  const fetchTasks = async () => {
    try {
      const res = await axios.get(`${API_BASE}/tasks`);
      setTasks(res.data);
    } catch (err) {
      alert("Error fetching tasks");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Handle task submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Please fill title and description");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(`${API_BASE}/tasks`, { title, description });
      setTasks([res.data, ...tasks]);
      setTitle("");
      setDescription("");
    } catch (err) {
      alert("Error creating task");
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <h1>AI-Powered Task Manager</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 10 }}
        />
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 10 }}
          rows={4}
        />
        <button type="submit" disabled={loading} style={{ padding: "10px 20px" }}>
          {loading ? "Adding..." : "Add Task"}
        </button>
      </form>

      <h2>Tasks</h2>
      {tasks.length === 0 && <p>No tasks yet.</p>}
      {tasks.map((task) => (
        <div key={task._id} style={{ border: "1px solid #ddd", padding: 10, marginBottom: 10 }}>
          <h3>{task.title}</h3>
          <p><b>Description:</b> {task.description}</p>
          <p><b>AI Summary:</b> {task.aiSummary || "N/A"}</p>
          <p><b>AI Priority:</b> {task.aiPriority || "Medium"}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
