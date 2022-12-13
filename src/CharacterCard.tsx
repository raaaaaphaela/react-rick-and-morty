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
    "status": string,
    "species": string,
    "type": string,
    "gender": string,
    "origin": {
        "name": string,
        "url": string
    },
    "location": {
        "name": string,
        "url": string
    },
    "image": string,
    "episode": string[],
    "url": string,
    "created": string
}