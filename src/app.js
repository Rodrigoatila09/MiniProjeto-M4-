const express = require('express');
const performanceRoutes = require('./routes/perfomanceRoutes');
const studyTipsRoutes = require('./routes/studyTipsRoutes');
const tasksRoutes = require('./routes/tasksRoutes');

const app = express();
const port = 4000;

app.use(express.json());

app.use('/performance', performanceRoutes);
app.use('/study-tips', studyTipsRoutes);
app.use('/tasks', tasksRoutes);

app.listen(port, () => {
  console.log(`APi RODANDO NA PORTA ${port}`);
});


