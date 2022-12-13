import React, {useEffect, useState} from 'react';
import './App.css';
import './Rick-and-Morty.css';
import CharacterGallery from "./CharacterGallery";
import Button from "./Button";
import axios from "axios";
import {Card} from "./Card";

function App() {

    const [count, setCount] = useState<number>(0);
    const [characters, setCharacters] = useState([]);

    const getCharacters = () => {
        return axios.get("https://rickandmortyapi.com/api/character")
            .then(response => response.data)
            .catch(e => console.log(e));
    }

    useEffect(() => {
        getCharacters().then(data => setCharacters(data.results))
    }, []);

    const data: Card[] = characters.map(({id, name, image, status}) => {
        return {
            "id": id,
            "name": name,
            "image": image,
            "status": status
        }
    });

    const onDelete = (id: number) => {
        // @ts-ignore
        setCharacters(characters.filter((character) => character.id !== id))}

    return (
        <div>
            <Button count={count} addFunction={() => setCount(count + 1)} takeFunction={() => setCount(count - 1)}/>
            <hr/>
            <h1 className="header">Rick and Morty Character</h1>
            <CharacterGallery characters={data} onDelete={onDelete}/>
        </div>
    );
}

export default App;
