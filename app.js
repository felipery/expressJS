const express = require('express');
const app = express();
const port = 3000;
let students = {
  top: {
    version_top: 26,
    students: 10,
    names: [
      'Felipe',
      'Laura',
      'Jailer',
      'Jaime',
      'Juan',
      'Andrés',
      'Nicolas',
      'Carlos',
      'Ivan',
      'Diana',
    ],
  },
};

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Curso encontrado satisfactoriamente',
    students,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
