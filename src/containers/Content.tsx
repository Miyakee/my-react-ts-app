import * as React from "react";
import '../Content.css';


export class Content extends React.Component<
    any,any >{
    public render() {
        return (
            <div>
                <input className="Content-Input"
                       placeholder="What needs to be done?"
                       data-reactid=".0.0.4"
                       onKeyDown={this.haldleKeyDown} />
            </div>
        )
    }
    private haldleKeyDown = (key: any)=>{
        if(key.keyCode === 13 ){
            alert(1)
        }

    }
}