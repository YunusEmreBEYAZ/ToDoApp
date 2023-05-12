import express from "express";
import { addToDo, getAlltoDo, findToDO } from "../controllers/todoController.js";

const router = express.Router();

router.get('/', getAlltoDo)

router.get('/:id', findToDO)

router.post('/', addToDo);

router.delete('/:id', (req, res) => {
    res.json({ msg: 'DELETE a todo' })
})

router.patch('/:id', (req, res) => {
    res.json({ msg: 'UPDATE a todo' })
})


export default router