import { useState } from "react"

export const AddToDoForm = () => {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newToDo = {
            title,
            category
        }

        const response = await fetch('todo', {
            method: 'POST',
            body: JSON.stringify(newToDo),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = response.json()
        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setTitle('')
            setCategory('')
            setError(null)
            // console.log('New note added', json);
        }

    }

    return (

        <form className="add-todo-form" onSubmit={handleSubmit}>
            <input
                required
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                placeholder="Add a new note..."
            />
            <select required className="select-category" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="" >Select Category</option>
                <option value="general">General</option>
                <option value="movies" >Movies</option>
                <option value="books">Books</option>
                <option value="shopping">Shopping</option>


            </select>

            <button type="submit" className="btn-add">Add Note</button>
            {error && <div className="error">{error}</div>}
        </form>


    )
}