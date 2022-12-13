export default function CharacterCard (props: {character: Character}) {
    return (
        <div className="character-card">
            <h1>{props.character.name}</h1>
            <img src={props.character.image} alt={`You see ${props.character.name}`}/>
            <p>Status: {props.character.status}</p>
        </div>
    )
};

export type Character = {
    "id": number,
    "name": string,
    "image": string,
    "status": string,
}
