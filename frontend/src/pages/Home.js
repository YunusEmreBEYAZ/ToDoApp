import { useEffect, useState } from "react";
import { TodoDetail } from "../components/TodoDetail.js";
import { AddToDoForm } from "../components/AddToDoForm.js";

const Home = () => {
    const [toDo, setToDo] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/todo')
            const data = await response.json()

            if (response.ok) {
                setToDo(data)
            }
        }
        fetchData();
    }, [])

    return (
        <div className="home">
            <AddToDoForm />
            <div>
                {toDo && toDo.map((singleToDo) => (
                    <TodoDetail key={singleToDo._id} singleToDo={singleToDo} />

                ))}
            </div>
        </div>
    )
}

export default Home;