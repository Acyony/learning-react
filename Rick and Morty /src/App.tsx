import React, {useEffect, useState} from 'react';
import './App.css';

interface Characters {
    id: number;
    name: string;
    image: string;
}


interface ApiResponse {
    results: Characters[];
}

// <T> is a generic typer parameter that will capture the type of the array elements. When  shuffleArray is called TypeScript will
// infer the correct type based on the array it was passed to it
function shuffleArray<T>(array: T[]): T[] {
    return array.slice().sort(() => Math.random() - 0.5)
}

function App() {
    const [characters, setCharacters] = useState<Characters[]>([]);
    const [startIndex, setStartIndex] = useState<number>(0);

    // User effect will be triggered once the component is rendered
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://rickandmortyapi.com/api/character");
                const data: ApiResponse = await response.json()
                console.log(data)
                setCharacters(data.results);
            } catch (err) {
                console.log("error", err)
            }
        }

        fetchData().then();
    }, [])

    const endIndex = startIndex + 3;
    const randomCharacters = shuffleArray(characters).slice(startIndex, endIndex);
    const hasMoreCharacters = endIndex < characters.length;

    const handleShowMore = () => {
        if (hasMoreCharacters) {
            setStartIndex(startIndex + 3)
        }
    }

    const handleReset = () => {
        setStartIndex(0);
    }
    return (
        <div className="App">
            <h1>Rick and Morty</h1>
            <div className="character-container">
                {randomCharacters.map((character) => (
                    <div key={character.id}>
                        <h1>{character.name}</h1>
                        <img src={character.image} alt={character.name}/>
                    </div>
                ))}
            </div>
            {hasMoreCharacters ? (
                <button onClick={handleShowMore}>Show me more!</button>
            ) : (
                <>
                <p>No more Characters to show ٩(˘◡˘)۶</p>
                <button onClick={handleReset}>Start Again?</button>
                </>
            )}
        </div>
    );
}

export default App;
