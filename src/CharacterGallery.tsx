import CharacterCard from "./CharacterCard";
import {Card} from "./Card";
import {useState} from "react";

export default function CharacterGallery({characters, onDelete}: {
    characters: Card[],
    onDelete: (id: number) => void,
}) {
    const [filter, setFilter] = useState("");

    return (<div className="gallery">
            <div>
                <label htmlFor="filter">Nach Namen filtern:</label>
            <input id="filter" type="text" name="title" value={filter}
                   onChange={e => setFilter(e.target.value.toLowerCase())}/>
            </div>
            <div className="character-gallery">
                {characters.filter(character => character.name.toLowerCase().includes(filter)).map((character: Card, index: number) => {
                    return <CharacterCard {...character} onDelete={onDelete} key={index}/>
                })}
            </div>
        </div>
    );
}