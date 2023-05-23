import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useTodoContext = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw Error("You have to use useAuthContext inside an TodoContextProvider")
    }

    return context;
}