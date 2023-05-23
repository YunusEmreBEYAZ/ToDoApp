import { useAuthContext } from "./useAuthContext"
import { useTodoContext } from "./useTodoContext"

export const useLogout = () => {

    const { dispatch } = useAuthContext()
    const { setTodos } = useTodoContext()

    const logout = () => {
        //remove user from local storage
        localStorage.removeItem('user')

        //dispatch logout action
        dispatch({ type: 'LOGOUT' })
        setTodos('')


    }

    return { logout }
}