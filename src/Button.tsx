import { MouseEventHandler } from "react";

export default function Button(props: { count: number, addFunction: MouseEventHandler<HTMLButtonElement> | undefined, takeFunction: MouseEventHandler<HTMLButtonElement> | undefined}) {
    return (
        <div className="buttons">
            <button onClick={props.addFunction}>Erhöhen</button>
            <button onClick={props.takeFunction}>Verringern</button>
            <h2>{props.count}</h2>
        </div>
    )
}