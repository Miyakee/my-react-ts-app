import * as React from "react";
import {IContentProps} from "./Content";

export class BottomBar extends React.Component<
    any,any > {
    constructor(props: IContentProps) {
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
                <div><input type="button" value="clear completed" onClick={this.deletedAllCompletedTask}/></div>
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