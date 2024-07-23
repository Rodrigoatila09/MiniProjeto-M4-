const PerformanceModel = require('..//models/performanceModel');
const performanceModel = new PerformanceModel();

const getPerformance = (req, res) => {
  const { studentId } = req.query;
  const performance = performanceModel.getPerformanceByStudentId(studentId);
  res.json(performance);
};

module.exports = {
  getPerformance
};
