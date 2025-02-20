import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FruitList from "./FruitList/FruitList";
import { getAllFruits } from "../../services/fruitService";
import { useLocation } from "react-router-dom";
import FruitDetail from "./FruitSearch/FruitDetail/FruitDetail";

const Container = styled.div`
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f8f8f8;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

const Title = styled.h1`
    font-size: 2rem;
    color: #2e7d32;
    margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
    font-size: 1.5rem;
    color: #555;
    margin-top: 20px;
`;

const Fruits = () => {
    const [fruits, setFruits] = useState([]);
    const { state } = useLocation(); // Access the passed state
    const fruitData = state?.fruitData; // Extract fruitData from state
    useEffect(() => {
        const fetchFruits = async () => {
            const allFruits = await getAllFruits();
            setFruits(allFruits);
        };
        fetchFruits();
    }, []);

  

    return (
        <Container>
            {/* Display the searched fruit details if available */}
            {fruitData && (
                <>
                    <h2>Searched Fruit Detail</h2>
                    <FruitDetail fruit={fruitData} />
                </>
            )}
            <Title>Fruits List</Title>
            <FruitList fruits={fruits} />
        </Container>
    );
};

export default Fruits;