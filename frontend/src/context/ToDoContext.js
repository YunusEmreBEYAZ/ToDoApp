import React, { createContext, useState, useEffect } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState(null);

    const fetchTodos = async (category) => {

        try {
            const url = category ? `/todo?category=${category}` : "/todo";
            const response = await fetch(url);
            const json = await response.json();
            setTodos(json);

        } catch (error) {
            setError(error);

        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);


    const addTodo = async (newTodo, category) => {
        try {
            const url = category ? `/todo?category=${category}` : "/todo";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newTodo),
            });

            const addedTodo = await response.json();

            if (addedTodo) {
                setTodos([addedTodo, ...todos]);
                fetchTodos()
            }

            return addedTodo;

        } catch (error) {
            setError(error);
        }


    };


    const deleteTodo = async (id, category) => {
        try {
            const url = category ? `/todo?category=${category}` : "/todo";
            await fetch(`${url}/${id}`, { method: "DELETE" });
            setTodos(todos.filter((todo) => todo.id !== id));
            fetchTodos()
        } catch (error) {
            setError(error);
        }


    };

    const contextValue = {
        todos,
        fetchTodos,
        addTodo,
        deleteTodo,
        error,
    };

    return (
        <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
    );
};
