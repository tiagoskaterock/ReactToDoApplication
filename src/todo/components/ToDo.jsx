import { useState } from "react"
import "../css/main.css"

export default function ToDo()  {
    
    const [newItem, setNewItem] = useState("")
    const [toDos, setToDos] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        setToDos((currentToDos) => {
            return [...currentToDos, {id: crypto.randomUUID(), title: newItem, completed: false}]
        })

        setNewItem('')
    }

    return (
        <>
            <form className="new-item-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <label htmlFor="item">New Item</label>
                    <input 
                        value={newItem} 
                        onChange={e => setNewItem(e.target.value)} 
                        type="text" 
                        id="item" 
                        placeholder="Your new item"
                    />
                </div>

                <button className="btn">Add</button>
            </form>
            <h1 className="header">To Do List</h1>

            <ul className="list">
                {toDos.map(toDo => {
                    return <li key={toDo.id}>
                        <label htmlFor="checkbox1">
                            <input type="checkbox" id="checkbox1" checked={toDo.completed} />
                            {toDo.title}
                        </label>

                        <button className="btn btn-danger">
                            Delete
                        </button>
                    </li>
                })}
                
                
            </ul>
        </>
    )
}
