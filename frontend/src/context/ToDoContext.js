import React, { createContext, useState, useEffect } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState(null);

    const fetchTodos = async () => {

        try {
            const response = await fetch("todo");
            const json = await response.json();
            setTodos(json);

        } catch (error) {
            setError(error);

        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const addTodo = async (newTodo) => {
        try {
            const response = await fetch("todo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newTodo),
            });

            setTodos([...todos, response]);
            return newTodo;


        } catch (error) {
            setError(error);
        }

    };

    const deleteTodo = async (id) => {
        try {
            await fetch(`todo/${id}`, { method: "DELETE" });
            setTodos(todos.filter((todo) => todo.id !== id));
        } catch (error) {
            setError(error);
        }
    };

    const contextValue = {
        todos,
        addTodo,
        deleteTodo,
        error,
    };

    return (
        <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
    );
};
