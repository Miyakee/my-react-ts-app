import * as React from "react";
import {BottomBar} from "./BottomBar";
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

    public updateList=(newList:[])=>{
        this.setState(
            {
                todoList:newList
            }
        )
    }

    public updateCurrentStatus=(currentList:number)=>{
        this.setState(
            {
                currentStatus:currentList
            }
        )
    }

    public render() {
        const unCompletedTasksLength = this.state.todoList.filter((value: any) => (value.status === 1)).length
        const allTasksLength = this.state.todoList.length
        return (
            <div>
                <div className="mainContent">
                    <input className="Content-Input"
                           placeholder="What needs to be done?"
                           data-reactid=".0.0.4"
                           onChange={event => this.handleInputChange(event.target.value)}
                           onKeyDown={this.haldleKeyDown}/>
                    <TodoList todoList={this.state.todoList}
                              currentStatus={this.state.currentStatus}
                              updateList={(todoList: []) => this.updateList(todoList)}/>

                              <BottomBar currentStatus={this.state.currentStatus}
                                         allTasksLength={allTasksLength}
                                         updateCurrentStatus = {
                                             (currentStatus: number) => this.updateCurrentStatus(currentStatus)
                                         }
                                         unCompletedTasksLength ={unCompletedTasksLength}
                              />

                </div>
            </div>
        )


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



}