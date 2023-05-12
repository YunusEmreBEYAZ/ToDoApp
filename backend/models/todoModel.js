import mongoose from "mongoose";

const Schema = mongoose.Schema;

const toDoSchema = new Schema({
    title: {},
    category: {}
}, { timestamps: true })

export default mongoose.model('todo', toDoSchema)