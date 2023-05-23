import React, { createContext, useState, useEffect } from "react";
import { useAuthContext } from '../hooks/useAuthContext'

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState(null);
    const { user } = useAuthContext()

    const fetchTodos = async (category) => {

        try {
            const url = category ? `/todo?category=${category}` : "/todo";
            const response = await fetch(url, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const json = await response.json();
            setTodos(json);

        } catch (error) {
            setError(error);

        }
    };

    useEffect(() => {
        if (user) {
            fetchTodos();
        }

    }, [user]);


    const addTodo = async (newTodo, category) => {
        if (!user) {
            setError('You must be logged in!')
            return
        }

        try {
            const url = category ? `/todo?category=${category}` : "/todo";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${user.token}`
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
        if (!user) {
            return
        }

        try {
            const url = category ? `/todo?category=${category}` : "/todo";

            await fetch(`${url}/${id}`, {
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${user.token}`
                },
            });

            setTodos(todos.filter((todo) => todo.id !== id));
            fetchTodos()

        } catch (error) {
            setError(error);
        }


    };

    const contextValue = {
        todos,
        setTodos,
        fetchTodos,
        addTodo,
        deleteTodo,
        error,
    };

    return (
        <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
    );
};
