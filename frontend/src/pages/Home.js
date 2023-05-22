import React, { useContext } from "react";
import { TodoDetail } from "../components/TodoDetail.js";
import { AddToDoForm } from "../components/AddToDoForm.js";
import { TodoContext } from "../context/ToDoContext.js";

const Home = () => {
    const { todos } = useContext(TodoContext);

    return (
        <div className="home">
            <AddToDoForm />
            <div>
                {todos &&
                    todos.map((singleToDo) => (
                        <TodoDetail key={singleToDo._id} singleToDo={singleToDo} />
                    ))}
            </div>
        </div>
    );
};

export default Home;