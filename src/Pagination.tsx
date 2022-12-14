export default function Pagination ({next, prev}:{
    next: () => void,
    prev: () => void
}) {
    return (
        <div className={"buttons"}>
            <button onClick={prev}>Vorherige Seite</button>
            <button onClick={next}>Nächste Seite</button>
        </div>
    )
}