import Todo from "../models/todoModel.js";
import mongoose from "mongoose";

//get all ToDO's
export const getAlltoDo = async (req, res) => {
    const user_id = req.user._id

    const allToDo = await Todo.find({ user_id }).sort({ createdAt: -1 })
    res.status(200).json(allToDo)
}

// get single ToDo
export const findToDO = async (req, res) => {
    const { id } = req.params;

    // for check the mongodb response if id is valid or not
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: `You don't have any to do with id: ${id}` })
    }
    const toDo = await Todo.findById(id)
    // if it is valid but user don't have the todo with that id
    if (!toDo) {
        return res.status(404).json({ error: `You don't have any to do with id: ${id}` })
    }

    res.status(200).json(toDo)
}


// add new ToDo
export const addToDo = async (req, res) => {
    const { title, category } = req.body;
    const user_id = req.user._id;

    if (title && category) {

        try {


            const todo = await Todo.create({ title, category, user_id });
            res.status(200).json(todo)
        } catch (error) {
            res.status(400).json({ error: error.message })
        }

    } else {
        res.status(400).json({ error: "Please add title and choose a category!" });
    }

}

// delete a TOdo
export const deleteToDo = async (req, res) => {
    const { id } = req.params;

    // for check the mongodb response if id is valid or not
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: `You don't have any to do with id: ${id}` })
    }

    const ToDo = await Todo.findOneAndDelete({ _id: id })

    if (!ToDo) {
        return res.status(404).json({ error: `You don't have any to do with id: ${id}` })
    }

    res.status(200).json(ToDo)
}

// update ToDo
export const updateToDo = async (req, res) => {
    const { id } = req.params;

    // for check the mongodb response if id is valid or not
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: `You don't have any to do with id: ${id}` })
    }

    const ToDo = await Todo.findByIdAndUpdate({ _id: id }, { ...req.body })
    if (!ToDo) {
        return res.status(404).json({ error: `You don't have any to do with id: ${id}` })
    }

    res.status(200).json(ToDo)
}