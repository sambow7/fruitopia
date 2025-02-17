import { useState } from 'react'
import './FruitForm.css'

function FruitForm({ addFruit }) {
    const [name, setName] = useState("");
    const [emoji, setEmoji] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        addFruit(name, emoji);
        setName("");
        setEmoji("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                placeholder='Enter fruit name'
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                value={emoji}
                placeholder='Enter fruit emoji (e.g. 🍎)'
                onChange={(e) => setEmoji(e.target.value)}
            />
            <button type="submit">Add Fruit</button>
        </form>
    )
}

export default FruitForm