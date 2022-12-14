import React, {useEffect, useState} from 'react';
import './App.css';
import './Rick-and-Morty.css';
import CharacterGallery from "./CharacterGallery";
import {Card} from "./Card";
import ApiRequests from "./hooks/ApiRequests";

function App() {

    const [characters, setCharacters] = useState<Card[]>([]);
    const [page, setPage] = useState<number>(1);
    const [filter, setFilter] = useState<string>("");
    const {getCharacters} = ApiRequests();

    useEffect(() => {
        (async () => {
            try {
                const characters = await getCharacters(filter, page);
                setCharacters(characters);
            } catch (e) {
                console.log((e as Error).message);
            }
        })();
    }, [page, filter]);

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
