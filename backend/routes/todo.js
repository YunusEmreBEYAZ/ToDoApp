import express from "express";
import { addToDo, getAlltoDo, findToDO, deleteToDo, updateToDo } from "../controllers/todoController.js";

const router = express.Router();

router.get('/', getAlltoDo)

router.get('/:id', findToDO)

router.post('/', addToDo);

router.delete('/:id', deleteToDo)

router.patch('/:id', updateToDo)


export default router