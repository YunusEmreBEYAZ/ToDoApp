import Todo from "../models/todoModel.js";

export const getAlltoDo = async (req, res) => {
    const allToDo = await Todo.find().sort({ createdAt: 1 })
    res.status(200).json(allToDo)
}


export const findToDO = async (req, res) => {
    const { id } = req.params;

    const toDo = await Todo.findById(id)

    if (!toDo) {
        return res.status(404).json({ error: `You dont have any to do with id: ${toDo.id}` })
    }

    res.status(200).json(toDo)
}



export const addToDo = async (req, res) => {
    const { title, category } = req.body;
    if (title && category) {
        try {
            const todo = await Todo.create({ title, category });
            res.status(200).json(todo)
        } catch (error) {
            res.status(400).json({ error: error.message })
        }

    } else {
        res.status(400).send('Please add title and choose a category!')
    }

}