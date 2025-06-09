const Task = require("../models/Task");
const { OpenAI } = require("openai");
require("dotenv").config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const generateSummary = async (title, description) => {
  const prompt = `Summarize the task and suggest its priority (High, Medium, Low) based on: \nTitle: ${title}\nDescription: ${description}`;
  const response = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-3.5-turbo"
  });
  return response.choices[0].message.content;
};

exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const aiResponse = await generateSummary(title, description);

    const [aiSummary, aiPriority] = aiResponse.split(/Priority:|priority:/i);
    const task = new Task({
      title,
      description,
      aiSummary: aiSummary?.trim(),
      aiPriority: aiPriority?.trim() || "Medium"
    });

    const saved = await task.save();
    res.json(saved);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Task creation failed." });
  }
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.find().sort({ createdAt: -1 });
  res.json(tasks);
};
