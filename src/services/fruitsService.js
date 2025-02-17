const BASE_URL = "http://localhost:5005/fruits"

export const getAllFruits = async () => {
    try {
        const res = await fetch(BASE_URL);
        const data = await res.json();
        return data
    } catch (error) {
        console.error("Error fetching all fruits: ", error);
        return [];
    }
}

export const show = async (fruit) => {
    try {
        const res = await fetch(`${BASE_URL}?name=${fruit}`)
        const data = await res.json();
        const selectedFruit = data.find(item => item.name.toLowerCase() === fruit.toLowerCase())
        if (selectedFruit) {
            console.log("Selected Fruit Data: ", selectedFruit)
            return selectedFruit;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error Fetching fruit data: ", error)
    }
}

show('apple')