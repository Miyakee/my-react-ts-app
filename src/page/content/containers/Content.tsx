import * as React from "react";
import './Content.css';
import {TodoList} from "./TodoList";

export interface IContentProps {
    history?: any;
    currentStatus?:number,
    task?:string,
    todoList?:[],

}


export class Content extends React.Component<
    IContentProps,any >{

    constructor(props: IContentProps) {
        super(props);
        this.state = {
            currentStatus:0,
            task:"",
            todoList:[],
        };
    }


    public render() {
        const tasksLength = this.state.todoList.
        filter((value:any) => (value.status===1)).length
        return (
            <div>
                <div className="mainContent">
                <input className="Content-Input"
                       placeholder="What needs to be done?"
                       data-reactid=".0.0.4"
                       onChange={event => this.handleInputChange(event.target.value)}
                       onKeyDown={this.haldleKeyDown} />
                       <TodoList todoList={this.state.todoList}
                                 currentStatus={this.state.currentStatus}
                       updateList={(todoList:[])=>updateList(todoList)}/>

                    {tasksLength>0?<div className="ListBottom">
                        <div><span>{tasksLength+"item list"}</span></div>
                        <div><input type="button" value="all" onClick={this.handleAllTask}/>
                            <input type="button" value="active" onClick={this.handleActiveTask}/>
                            <input type="button" value="completed" onClick={this.handleCompletedTask}/>
                        </div>
                        <div><input type="button" value="clear completed" onClick={this.deletedAllCompletedTask}/></div>
                    </div>:""}

                </div>
            </div>
        )

    const updateList=(newList:[])=>{
            this.setState(
                {
                    todoList:newList
                }
            )
        }
    }



    private haldleKeyDown = (key: any)=>{
        if(key.keyCode === 13 &&this.state.task!=="" ){
           this.state.todoList.push({taskContent:this.state.task,status:1,checked:false})
            this.setState({
                todoList:this.state.todoList
            })
        }


    }
    private handleInputChange = (value: string)=>{
        this.setState({
            task:value
        })
    }

    private handleAllTask=()=>{
        this.setState({
            currentStatus:0
        })

    }
    private handleActiveTask=()=>{
        this.setState({
            currentStatus:1
        })
    }
    private  handleCompletedTask=()=>{
        this.setState({
            currentStatus:2
        })
    }



    private deletedAllCompletedTask = ()=>{
        this.state.todoList.filter((each:any)=>(each.status === 2)).map((value:any,index:string)=>(
            this.setState({
                    todoList: this.state.todoList.splice(index, 1)
                }
            )
        )
    )
}

}