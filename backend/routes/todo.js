import express from "express";
import { addToDo, getAlltoDo, findToDO, deleteToDo, updateToDo } from "../controllers/todoController.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = express.Router();

// for accessing the all todo routes
router.use(requireAuth)

router.get('/', getAlltoDo)

router.get('/:id', findToDO)

router.post('/', addToDo);


router.delete('/:id', deleteToDo)

router.patch('/:id', updateToDo)


export default router