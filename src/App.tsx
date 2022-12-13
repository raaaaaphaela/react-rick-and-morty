import React, {useEffect, useState} from 'react';
import './App.css';
import './Rick-and-Morty.css';
import CharacterGallery from "./CharacterGallery";
import {Character} from "./CharacterCard";
import Button from "./Button";
import axios from "axios";

function App() {

    const [count, setCount] = useState<number>(0);
    const [characters, setCharacters] = useState([]);

    /* Rick and Morty stuff */
    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then(response => response.data)
            .then(data => setCharacters(data.results))
            .catch(e => console.log(e))
    }, []);


    const data: Character[] = characters.map(({id, name, image, status}) => {
        return {
            "id": id,
            "name": name,
            "image": image,
            "status": status
        }
    });

    /* Button functionality */
    let addToCount = () => setCount(count + 1);
    let takeFromCount = () => setCount(count - 1);

    return (
        <div>
            <Button count={count} addFunction={addToCount} takeFunction={takeFromCount}/>
            <hr/>
            <h1 className="header">Rick and Morty Character</h1>
            <CharacterGallery characters={data}/>
        </div>
    );
}

export default App;
