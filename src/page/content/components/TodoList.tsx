import * as React from "react";
import {ITask} from "../reducer";

export interface ITodoList {
    history?: any;
    todoList: ITask[],
    currentStatus?: number,
    deleteTask: (taskId: number)=>void,
    changeToCompleted: (taskId: number) =>void
    changeTaskStatus: (taskId: number,status: number)=>void


}

export class TodoList extends React.Component<
    ITodoList,any > {

    constructor(props: ITodoList) {
        super(props);
    }


    public render(){

        return (
            <ul className = "Content-List" >
            {
                this.props.todoList.filter((value: any) => this.getCurrentStatus(value.status))
                    .map((value: ITask, index: number) => (
                        <li className = "Content-List-li"
                            key = {index} >
                            <div className = "completeBtn" >
                                <input type = "checkBox"
                                       value = "completed"
                                       checked = {value.checked}
                                       key = {index}
                                       onClick = {this.changeToCompleted.bind(this, index)}
                                />
                                </div>
                                    <div
                                        className = "ListContent" >
        <span className = "liSpan" > {value.taskContent} </span>
            </div>
            <div
                className = "deletedBtn" >
        <input type = "button"
               value = "deleted"
               onClick = {this.deletedTheTask.bind(this, index)}
        />
        </div>
        </li>
    ))
    }
        </ul>

            )

    }

    private  getCurrentStatus=(status:number)=>{
        if(this.props.currentStatus === 0){
            return true
        }
        return  status === this.props.currentStatus
    }


    private  changeToCompleted=(index:number,event:any)=>{
        this.props.changeToCompleted(index);
        this.props.changeTaskStatus(index,2)
    }

    private deletedTheTask = (index:number,event:any)=>{
      this.props.deleteTask(index);
    }
}