// routes/taskRoutes.js

const express = require('express');
const router = express.Router();
const Task = require('../models/task');
const authenticateToken = require('../middleware/auth');

// POST new task (requires authentication)
router.post('/', authenticateToken, async (req, res) => {
  const { title, description } = req.body;

  try {
    const newTask = new Task({
      title,
      description,
      completed: false
    });

    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET all tasks (requires authentication)
router.get('/', authenticateToken, async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET task by ID (requires authentication)
router.get('/:id', authenticateToken, getTask, (req, res) => {
  res.json(res.task);
});

// PUT update task (requires authentication)
router.put('/:id', authenticateToken, getTask, async (req, res) => {
  if (req.body.title !== null) {
    res.task.title = req.body.title;
  }
  if (req.body.description !== null) {
    res.task.description = req.body.description;
  }
  if (req.body.completed !== null) {
    res.task.completed = req.body.completed;
  }

  try {
    const updatedTask = await res.task.save();
    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE task (requires authentication)
router.delete('/:id', authenticateToken, getTask, async (req, res) => {
  try {
    await res.task.remove();
    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

async function getTask(req, res, next) {
  let task;
  try {
    task = await Task.findById(req.params.id);
    if (task === null) {
      return res.status(404).json({ message: 'Task not found' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.task = task;
  next();
}

module.exports = router;
