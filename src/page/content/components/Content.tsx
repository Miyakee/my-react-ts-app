import * as React from "react";
import {ITask} from "../reducer";
import {BottomBar} from "./BottomBar";
import './Content.css';
import {TodoList} from "./TodoList";

export interface IContentProps {
    history?: any;
    currentStatus: number,
    task?: string,
    todoList: ITask[],
    addTask: (task: string) => void,
    deleteTask: (taskId: number)=>void,
    changeToCompleted: (taskId: number)=>void,
    updateCurrentStatus: (status: number)=>void
    changeTaskStatus: (taskId: number,status: number)=>void,
    deleteAllCompletedTask: ()=>void,
}

export class Content extends React.Component<
    IContentProps,any >{

    constructor(props: IContentProps) {
        super(props);
        this.state = {
            task:"",
        };
    }


    public render() {
        const unCompletedTasksLength =this.props.todoList? this.props.todoList.filter((value: any) => (value.status === 1)).length:0;
        const allTasksLength = this.props.todoList?this.props.todoList!.length:0;
        return (
            <div>
                <div className="mainContent">
                    <input className="Content-Input"
                           placeholder="What needs to be done?"
                           data-reactid=".0.0.4"
                           onChange={event => this.handleInputChange(event.target.value)}
                           onKeyDown={this.haldleKeyDown}/>
                    <TodoList todoList={this.props.todoList!}
                              currentStatus={this.props.currentStatus}
                              deleteTask= {this.props.deleteTask}
                              changeToCompleted ={this.props.changeToCompleted}
                              changeTaskStatus={this.props.changeTaskStatus}
                    />

                              <BottomBar todoList={this.props.todoList}
                                  currentStatus={this.props.currentStatus}
                                         allTasksLength={allTasksLength}
                                         updateCurrentStatus = {this.props.updateCurrentStatus}
                                         unCompletedTasksLength ={unCompletedTasksLength}
                                         deleteTask={this.props.deleteTask}
                                         deleteAllCompletedTask={this.props.deleteAllCompletedTask}

                />

                </div>
            </div>
        )


    }


    private haldleKeyDown = (key: any)=>{
        if(key.keyCode === 13 &&this.state.task!=="" ){
            this.props.addTask(this.state.task);
        }

    };
    private handleInputChange = (value: string)=>{
        this.setState({
            task:value
        })
    }



}