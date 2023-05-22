import { TodoContext } from "../context/ToDoContext";
import { useContext } from "react";

export const useTodoContext = () => {
    const todoContext = useContext(TodoContext)

    if (!todoContext) {
        throw Error("You have to use useTodoContext inside an TodoContextProvider")
    }

    return todoContext;
}