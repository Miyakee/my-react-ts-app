import * as React from "react";
import './Content.css';

export interface IContentProps {
    history?: any;

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
                <ul className="Content-List">
                    {this.state.todoList.
                    filter((value:any) => this.getCurrentStatus(value.status))
                        .map((value:any,index:string) => (
                            <li className="Content-List-li" key={index}>
                                <div className="completeBtn">
                                    <input type="checkBox"   value="completed"  checked={value.checked} key={index} onClick={this.changeToCompleted.bind(this,index)}/>
                                </div>
                                <div className="ListContent">
                                <span className="liSpan" >{value.taskContent}</span>
                                </div>
                                <div className="deletedBtn">
                                    <input type="button" value="deleted" onClick={this.deletedTheTask.bind(this,index)}/>
                                </div>
                                </li>
                    ))}
                </ul>
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

    private  getCurrentStatus=(status:number)=>{
        if(this.state.currentStatus === 0){
            return true
        }
       return  status === this.state.currentStatus
    }


    private  changeToCompleted=(index:string,event:any)=>{
        if(this.state.todoList[index].checked){
            this.state.todoList[index].status=1
            this.state.todoList[index].checked=false
            this.setState({
                todoList: this.state.todoList,
            })
        }else{
            this.state.todoList[index].status=2
            this.state.todoList[index].checked=true
            this.setState({
                todoList: this.state.todoList,
            })
        }

    }

    private deletedTheTask = (index:string,event:any)=>{
        this.state.todoList.splice(index, 1)
        this.setState({
            todoList: this.state.todoList
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