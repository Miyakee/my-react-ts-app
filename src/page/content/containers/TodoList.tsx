import * as React from "react";
import {IContentProps} from "./Content";



export class TodoList extends React.Component<
    any,any > {

    constructor(props: IContentProps) {
        super(props);
        this.state = {
            todoList:[],
        };
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
        this.setState({
            todoList:this.props.todoList
        })
        if(this.state.todoList[index].checked){
            this.state.todoList[index].status=1
            this.state.todoList[index].checked=false
        }else{
            this.state.todoList[index].status=2
            this.state.todoList[index].checked=true
        }

        this.props.updateList(this.state.todoList)

    }

    private deletedTheTask = (index:string,event:any)=>{
        this.setState({
            todoList:this.props.todoList
        })
        this.state.todoList.splice(index, 1)
        this.props.updaeList({
            todoList: this.state.todoList
        })
    }
}