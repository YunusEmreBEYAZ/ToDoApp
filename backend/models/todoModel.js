import mongoose from "mongoose";

const Schema = mongoose.Schema;

const toDoSchema = new Schema({
    title: {},
    category: {},
    user_id: {}
}, { timestamps: true })

export default mongoose.model('todo', toDoSchema)