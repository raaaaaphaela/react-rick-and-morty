import CharacterCard from "./CharacterCard";
import {Card} from "./Card";


export default function CharacterGallery ({characters, onDelete}: {
    characters: Card[],
    onDelete: (id: number) => void
}) {
    return (
        <div className="character-gallery">
            {characters.map((character: Card, index: number) => {
                return <CharacterCard {...character} onDelete={onDelete} key={index}/>
            })}
        </div>
    );
}