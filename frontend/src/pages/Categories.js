import React, { useContext } from "react";
import { TodoDetail } from "../components/TodoDetail.js";
import { AddToDoForm } from "../components/AddToDoForm.js";
import { TodoContext } from "../context/ToDoContext.js";
import { useParams } from "react-router-dom";

const Categories = () => {
    const { todos } = useContext(TodoContext);
    const { category } = useParams();

    const filteredTodos = todos.filter((todo) => todo.category === category);

    return (
        <div className="home">
            <AddToDoForm />
            <div>
                {filteredTodos.map((singleToDo) => (
                    <TodoDetail key={singleToDo._id} singleToDo={singleToDo} />
                ))}
            </div>
        </div>
    );
};

export default Categories;