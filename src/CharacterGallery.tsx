import CharacterCard, {Character} from "./CharacterCard";

export default function CharacterGallery (props: {characters: Character[]}) {
    return (
        <div className="character-gallery">
            {props.characters.map((character: Character, index: number) => {
                return <CharacterCard character={character} key={index}/>
            })}
        </div>
    );
}