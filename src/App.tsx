import React, {useEffect, useState} from 'react';
import './App.css';
import './Rick-and-Morty.css';
import CharacterGallery from "./CharacterGallery";
import axios from "axios";
import {Card} from "./Card";

function App() {

    // const [count, setCount] = useState<number>(0);
    const [characters, setCharacters] = useState<Card[]>([]);
    const [page, setPage] = useState<number>(1);
    const [filter, setFilter] = useState<string>("");

    /* API calls */
    async function getCharacters(): Promise<Card[]> {
        try {
            const response = await axios.get("https://rickandmortyapi.com/api/character?page=" + page);
            return response.data.results;
        } catch (e) {
            throw e;
        }
    }

    async function getCharactersByFilter(): Promise<Card[]> {
        try {
            const response = await axios.get("https://rickandmortyapi.com/api/character?name=" + filter);
            return response.data.results;
        } catch (e) {
            throw e;
        }
    }

    /* Get all characters with pagination option */
    useEffect(() => {
        (async () => {
            try {
                const characters = await getCharacters();
                setCharacters(characters);
            } catch (e) {
                console.log(e);
            }
        })();
    }, [page]);

    /* Get all characters name filter */
    useEffect(() => {
        (async () => {
            try {
                const characters: Card[] = await getCharactersByFilter();
                setCharacters(characters);
            } catch (e) {
                console.log(e);
            }
        })();
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
        setPage(page + 1);
    }

    const prevPage = () => {
        page === 1 ? setPage(page) : setPage(page - 1);
    }

    return (
        <div>
            <CharacterGallery characters={data} onDelete={onDelete} filter={filter} setFilter={setFilter}
                              next={nextPage} prev={prevPage}/>
        </div>
    );
}

export default App;
