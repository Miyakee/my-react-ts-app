import * as React from "react";
import {ITask} from "../reducer";
export interface IBottomBarProps {
    todoList: ITask[],
    currentStatus: number,
    allTasksLength: number,
    updateCurrentStatus: (status: number)=>void,
    unCompletedTasksLength: number,
    deleteTask: (taskId: number)=>void,
    deleteAllCompletedTask: ()=>void,
}
export class BottomBar extends React.Component<
    IBottomBarProps,any > {
    constructor(props: IBottomBarProps) {
        super(props);
    }


    public render(){
        if(this.props.allTasksLength>0){
            return(
                <div className="ListBottom">
                <div><span>{this.props.unCompletedTasksLength + "item list"}</span></div>
                <div><input type="button" value="all" onClick={this.handleAllTask}/>
                    <input type="button" value="active" onClick={this.handleActiveTask}/>
                    <input type="button" value="completed" onClick={this.handleCompletedTask}/>
                </div>
                <div><input type="button" value="clear completed" onClick={this.props.deleteAllCompletedTask}/></div>
            </div>
            )
        }else {
            return ""
        }

    }


    private handleAllTask=()=>{
        this.props.updateCurrentStatus(0)

    }
    private handleActiveTask=()=>{
        this.props.updateCurrentStatus(1)
    }
    private  handleCompletedTask=()=>{
        this.props.updateCurrentStatus(2)
    }

}