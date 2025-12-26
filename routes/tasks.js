const express = require("express");
const Task = require("../models/Task");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// Add task
router.post("/", auth, async (req, res) => {
  const task = new Task({ ...req.body, userId: req.user });
  await task.save();
  res.json(task);
});

// Get tasks with search and filters
router.get("/", auth, async (req, res) => {
  try {
    const { search, priority, status } = req.query;

    // Build filter query
    let query = { userId: req.user };

    // Search by title (case-insensitive)
    if (search) {
      query.title = { $regex: search, $options: "i" };
    }

    // Filter by priority
    if (priority && ["Low", "Medium", "High"].includes(priority)) {
      query.priority = priority;
    }

    // Filter by completion status
    if (status === "completed") {
      query.completed = true;
    } else if (status === "active") {
      query.completed = { $ne: true };
    }

    const tasks = await Task.find(query).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
});

// Update task
router.put("/:id", auth, async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(task);
});

// Delete task
router.delete("/:id", auth, async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
});

module.exports = router;
