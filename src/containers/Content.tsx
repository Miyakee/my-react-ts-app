import * as React from "react";
import '../Content.css';




export interface IContentProps {
    history?: any;

}

export class Content extends React.Component<
    IContentProps,any >{

    constructor(props: IContentProps) {
        super(props);
        this.state = {
            currentStatus:0,
            things:"",
            todoList:[],
        };
    }


    public render() {
        const thingsLength = this.state.todoList.length
        return (
            <div>
                <div className="mainContent">
                <input className="Content-Input"
                       placeholder="What needs to be done?"
                       data-reactid=".0.0.4"
                       onChange={event => this.handleInputChange(event.target.value)}
                       onKeyDown={this.haldleKeyDown} />
                <ul className="Content-List">
                    {this.state.todoList.
                    filter((value:any) => this.getCurrentStatus(value.status))
                        .map((value:any,index:string) => (
                            <li className="Content-List-li" key={index}><input type="button" value="completed" key={index} onClick={this.changeToCompleted.bind(this,index)}/><span>{value.thing}</span><input type="button" value="deleted" onClick={this.deletedTheTask.bind(this,index)}/></li>
                    ))}
                </ul>
                    <div ><span>{thingsLength+"item list"}</span>
                        <input type="button" value="all" onClick={this.handleAllThings}/>
                         <input type="button" value="active" onClick={this.handleActiveThings}/>
                        <input type="button" value="completed" onClick={this.handleCompletedThings}/>

                    </div>
                </div>
            </div>
        )
    }


    private haldleKeyDown = (key: any)=>{
        if(key.keyCode === 13 &&this.state.things!=="" ){
           this.state.todoList.push({thing:this.state.things,status:1})
            this.setState({
                todoList:this.state.todoList
            })
        }

    }
    private handleInputChange = (value: string)=>{
        this.setState({
            things:value
        })
    }

    private handleAllThings=()=>{
        this.setState({
            currentStatus:0
        })

    }
    private handleActiveThings=()=>{
        this.setState({
            currentStatus:1
        })
    }
    private  handleCompletedThings=()=>{
        this.setState({
            currentStatus:2
        })
    }

    private  getCurrentStatus=(status:number)=>{
        if(this.state.currentStatus === 0){
            return true
        }
       return  status === this.state.currentStatus
    }


    private  changeToCompleted=(index:string,event:any)=>{
       this.state.todoList[index].status=2
        this.setState({
            todoList: this.state.todoList
        })
    }

    private deletedTheTask = (index:string,event:any)=>{
        this.state.todoList.splice(index, 1)
        this.setState({
            todoList: this.state.todoList
        })
    }


}