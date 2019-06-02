import * as React from "react";
import './Footer.css';


export class Footer extends React.Component<
    any,any >{
    public render() {
        return (
            <div className="Footer">
                <p className="Footer-text">  Double-click to edit a todo </p>
                <p className="Footer-text">Created by Remo H. Janscen </p>
                    <p className="Footer-text">Part of TodoMVC </p>
            </div>
        )
    }
}
