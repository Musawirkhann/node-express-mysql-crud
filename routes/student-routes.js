const express = require('express');
const {getStudents, getStudentById, addStudent, updateStudent, deleteStudent} = require('../controllers/studentController');

const router = express.Router();

router.get('/students', getStudents);
router.get('/student/:id', getStudentById);
router.post('/student', addStudent);
router.put('/student/:id', updateStudent);
router.delete('/student/:id', deleteStudent);



module.exports = {
    routes: router
}