import React, { useEffect, useContext } from "react";
import { TodoDetail } from "../components/TodoDetail.js";
import { AddToDoForm } from "../components/AddToDoForm.js";
import { TodoContext } from "../context/ToDoContext.js";
import { useParams } from "react-router-dom";

const Home = () => {
    const { todos, fetchTodos } = useContext(TodoContext)
    const { category } = useParams();

    let filteredTodos = todos;

    if (category) {
        filteredTodos = todos.filter((todo) => todo.category === category);
    }


    useEffect(() => {
        fetchTodos()
    }, [category, fetchTodos])



    return (
        <div className="home">
            <AddToDoForm />
            <div>
                {filteredTodos && filteredTodos.map((singleToDo) => (
                    <TodoDetail key={singleToDo._id} singleToDo={singleToDo} />

                ))}
            </div>
        </div>
    )
}

export default Home;