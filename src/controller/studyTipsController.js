const StudyTipsModel = require('../models/studyTipsModel');
const studyTipsModel = new StudyTipsModel();

const getStudyTips = (req, res) => {
  const { studentId } = req.query;
  const tips = studyTipsModel.getTipsByStudentId(studentId);
  res.json(tips);
};

module.exports = {
  getStudyTips
};
