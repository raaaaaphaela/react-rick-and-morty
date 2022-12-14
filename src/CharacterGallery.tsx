import CharacterCard from "./CharacterCard";
import {Card} from "./Card";
import React from "react";
import Pagination from "./Pagination";

export default function CharacterGallery({characters, onDelete, filter, setFilter, next, prev}: {
    characters: Card[],
    onDelete: (id: number) => void,
    filter: string,
    setFilter: (event: string)=>void,
    next: () => void,
    prev: () => void
}) {
    return (<div className="gallery">
            <h1 className="header">Rick and Morty</h1>
            <div>
                <label htmlFor="filter">Nach Namen filtern:</label>
                <input id="filter" type="text" name="title" value={filter}
                       onChange={e => setFilter(e.target.value.toLowerCase())}/>
            </div>
            <Pagination next={next} prev={prev}/>
            <div className="character-gallery">
                {characters.filter(character => character.name.toLowerCase().includes(filter)).map((character: Card, index: number) => {
                    return <CharacterCard {...character} onDelete={onDelete} key={index}/>
                })}
            </div>
        </div>
    );
}