import dotenv from 'dotenv';
import express from 'express';
import toDo from './routes/todo.js'
import mongoose from 'mongoose';
import userRoutes from './routes/user.js'

dotenv.config()


const app = express();
app.use(express.json())
app.use((req, res, next) => {
    next();
})

//routes
app.use('/todo', toDo)
app.use('/user', userRoutes)


//connection to mongodb
mongoose.connect(process.env.MONGO_URI)
    .then(() => {

        app.listen(process.env.PORT, () => {
            console.log('connected mongodb and listening on port', process.env.PORT);
        })
    })
    .catch((err) => {
        console.log(err);
    })
