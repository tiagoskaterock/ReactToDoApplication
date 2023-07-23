import { useState } from "react"

export function NewTodoForm({onSubmit}) {

    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {

        e.preventDefault()

        if(newItem === "") return

        onSubmit(newItem)

        setNewItem('')
    }

    return <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row">
            <label htmlFor="item">New Item</label>
            <input 
                autoComplete="off"
                value={newItem} 
                onChange={e => setNewItem(e.target.value)} 
                type="text" 
                id="item" 
                placeholder="Your new item"
            />
        </div>

        <button className="btn">Add</button>
    </form>
}