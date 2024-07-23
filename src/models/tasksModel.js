class TasksModel {
    constructor() {
      this.tasksData = {
        "1": [
          { task: "Trabalho de Matemática", dueDate: "2023-07-31" },
          { task: "Leitura de Física", dueDate: "2023-08-05" }
        ],
        "2": [
          { task: "Projeto de História", dueDate: "2023-08-10" },
          { task: "Redação de Inglês", dueDate: "2023-08-15" }
        ],
        "3": [
          { task: "Exercícios de Álgebra Linear", dueDate: "2023-07-20" },
          { task: "Estudo para prova de Inglês", dueDate: "2023-07-25" }
        ]
      };
    }
  
    getTasksByStudentId(studentId) {
      return this.tasksData[studentId] || [];
    }
  }
  
  module.exports = TasksModel;
  