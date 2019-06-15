import * as React from "react";
import {IContentProps} from "./Content";



export class TodoList extends React.Component<
    any,any > {

    constructor(props: IContentProps) {
        super(props);
    }


    public render(){

        return (
            <ul className = "Content-List" >
            {
                this.props.todoList.filter((value: any) => this.getCurrentStatus(value.status))
                    .map((value: any, index: string) => (
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


    private  changeToCompleted=(index:string,event:any)=>{
        if(this.props.todoList[index].checked){
            this.props.todoList[index].status=1
            this.props.todoList[index].checked=false
        }else{
            this.props.todoList[index].status=2
            this.props.todoList[index].checked=true
        }

        this.props.updateList(this.props.todoList)
    }

    private deletedTheTask = (index:string,event:any)=>{
        this.props.todoList.splice(index, 1)
        this.props.updateList(this.props.todoList)
    }
}