class PerformanceModel {
    constructor() {
      this.performanceData = {
        "1": [
          { course: "Matemática", grade: 8.5, semester: "2023-1" },
          { course: "Física", grade: 7.0, semester: "2023-2" }
        ],
        "2": [
          { course: "História", grade: 9.5, semester: "2023-3" },
          { course: "Inglês", grade: 4.0, semester: "2023-5" }
        ],
        "3": [
          { course: "Álgebra Linear", grade: 3.5, semester: "2023-1" },
          { course: "Inglês", grade: 4.0, semester: "2023-2" }
        ]
      };
    }
  
    getPerformanceByStudentId(studentId) {
      return this.performanceData[studentId] || [];
    }
  }
  
  module.exports = PerformanceModel;
  