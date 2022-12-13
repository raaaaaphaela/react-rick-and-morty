export default function CharacterCard({id, name, image, status, onDelete}: {
    "id": number,
    "name": string,
    "image": string,
    "status": string,
    onDelete: (id: number) => void
}) {
    return (
        <div className="character-card">
            <h1>{name}</h1>
            <img src={image} alt={`You see ${name}`}/>
            <p>Status: {status}</p>
            <button className="delete-btn" onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}
