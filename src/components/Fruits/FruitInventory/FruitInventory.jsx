import React from 'react';

function FruitInventory() {
    return (
        <div>
            <h1>Fruit Inventory</h1>
            <div>
                <h3>Available Fruits:</h3>
                <ul>
                    {
                        fruits.map(fruit => (
                            <li key={fruit.id}>
                                <span>{fruit.name} {fruit.emoji}</span>
                                {fruit.inStock && (
                                    <button onClick={() => handleAddFruit(fruit)}>Add to Collection</button>
                                )}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <h3>Your Collection: </h3>
                <ul>
                    {
                        collectedFruits.map(fruit => (
                            <li key={fruit.id}>
                                <span>{fruit.name} {fruit.emoji}</span>
                                <button onClick={() => handleRemoveFruit(fruit)}>Remove from Collection</button>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </div>
    )
}

export default FruitInventory