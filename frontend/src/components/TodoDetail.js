import { TodoContext } from "../context/ToDoContext";
import { useTodoContext } from "../hooks/useTodoContext";

export const TodoDetail = ({ singleToDo }) => {
    const { deleteTodo, fetchTodos } = useTodoContext(TodoContext);

    const handleClickDelete = async () => {
        const response = await deleteTodo(singleToDo._id);

        if (response) {
            fetchTodos();
        } else {
            throw Error("Failed to delete!")
        }
    };

    return (
        <div className="todo-container">
            <div className="todo-item">
                <div className="todo-category">{singleToDo.category}</div>
                <div className="todo-text"><h4 >{singleToDo.title}</h4></div>
                <div className="todo-delete" ><img
                    className="delete-todo-span"
                    src={process.env.PUBLIC_URL + "/delete.png"}
                    alt="Delete"
                    onClick={handleClickDelete}
                /></div>
            </div>
        </div>

    )
}