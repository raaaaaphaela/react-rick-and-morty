import React, {useEffect, useState} from 'react';
import './App.css';
import './Rick-and-Morty.css';
import CharacterGallery from "./CharacterGallery";
import Button from "./Button";
import axios from "axios";
import {Card} from "./Card";

function App() {

    // const [count, setCount] = useState<number>(0);
    const [characters, setCharacters] = useState<Card[]>([]);
    const [page, setPage] = useState<number>(1);
    const [filter, setFilter] = useState<string>("");


    const getCharacters = () => {
        return axios.get("https://rickandmortyapi.com/api/character?page=" + page)
            .then(response => response.data)
            .catch(e => console.log(e));
    }

    const getCharactersByFilter = () => {
        return axios.get("https://rickandmortyapi.com/api/character?name="+filter)
            .then(response => response.data)
            .catch(e => console.log(e));
    }

    /* Get all characters with pagination option */
    useEffect(() => {
        getCharacters().then(data => setCharacters(data.results))
    }, [page]);

    /* Get all characters name filter */
    useEffect(() => {
        getCharactersByFilter().then(data => setCharacters(data.results))
        console.log(characters)
    }, [filter]);

    const data: Card[] = characters.map(({id, name, image, status}) => {
        return {
            "id": id,
            "name": name,
            "image": image,
            "status": status
        }
    });

    const onDelete = (id: number) => {
        setCharacters(characters.filter((character) => character.id !== id))
    }

    /* Pagination */
    const nextPage = () => {
        setPage(page+1);
    }

    const prevPage = () => {
        page === 1 ? setPage(page) : setPage(page-1);
    }

    return (
        <div>
            {/*<Button count={count} addFunction={() => setCount(count + 1)} takeFunction={() => setCount(count - 1)}/>*/}
            {/*<hr/>*/}
            <CharacterGallery characters={data} onDelete={onDelete} filter={filter} setFilter={setFilter} next={nextPage} prev={prevPage}/>
        </div>
    );
}

export default App;
