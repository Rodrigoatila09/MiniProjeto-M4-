class StudyTipsModel {
    constructor() {
      this.studyTipsData = {
        "1": [
          { tip: "Estude em sessões curtas e frequentes." },
          { tip: "Crie um ambiente de estudo dedicado." }
        ],
        "2": [
          { tip: "Faça pausas regulares para descansar a mente." },
          { tip: "Utilize técnicas de memorização." }
        ],
        "3": [
          { tip: "Revise frequentemente os conteúdos estudados." },
          { tip: "Participe de grupos de estudo." }
        ]
      };
    }
  
    getTipsByStudentId(studentId) {
      return this.studyTipsData[studentId] || [];
    }
  }
  
  module.exports = StudyTipsModel;
  