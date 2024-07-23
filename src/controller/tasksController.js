const TasksModel = require('../models/tasksModel');
const tasksModel = new TasksModel();

const getTasks = (req, res) => {
  const { studentId } = req.query;
  const tasks = tasksModel.getTasksByStudentId(studentId);
  res.json(tasks);
};

module.exports = {
  getTasks
};
