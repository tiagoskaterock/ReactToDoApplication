import { useState } from "react"
import "../css/main.css"

export default function ToDo()  {
    
    const [newItem, setNewItem] = useState("")

    return (
        <>
            <form className="new-item-form">
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
                <li>
                    <label htmlFor="checkbox1">
                        <input type="checkbox" id="checkbox1" />
                        Item 1
                    </label>

                    <button className="btn btn-danger">
                        Delete
                    </button>
                </li>

                <li>
                    <label htmlFor="checkbox2">
                        <input type="checkbox" id="checkbox2" />
                        Item 2
                    </label>

                    <button className="btn btn-danger">
                        Delete
                    </button>
                </li>
                
            </ul>
        </>
    )
}
