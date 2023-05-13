

export const TodoDetail = ({ singleToDo }) => {
    return (
        <div className="todo-item">
            <h4 className="todo-text"><span className="todo-category">{singleToDo.category}</span>{singleToDo.title}</h4>
        </div>
    )
}