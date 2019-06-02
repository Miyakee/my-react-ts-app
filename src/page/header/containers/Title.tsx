import * as React from "react";
import './Header.css';


export class Title extends React.Component<
    any,any >{
    public render() {
        return (
            <div >
                <h1 className="Header-Title">todos</h1>
            </div>
        )
    }
}
