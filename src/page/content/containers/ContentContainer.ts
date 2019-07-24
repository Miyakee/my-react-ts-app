import {connect} from "react-redux";
import {Dispatch} from "redux";
import {
    addTask,
    changeTaskStatus,
    changeToCompleted,
    deleteAllCompletedTask,
    deleteTask,
    updateCurrentStatus
} from "../action";
import {Content} from "../components/Content";
import {ITodolistRes} from "../reducer";
// 传入数值
const mapStateToProps = (state:ITodolistRes) => ({
    currentStatus: state.todoApp.currentStatus,
    todoList: state.todoApp.todoLists
})
// 传入方法
const mapDispatchToProps=(dispatch: Dispatch)=>({
    addTask: (task: string) => dispatch(addTask(task)),
    changeTaskStatus:(taskId: number ,status: number) => dispatch(changeTaskStatus(taskId,status)),
    changeToCompleted: (taskId: number) => dispatch(changeToCompleted(taskId)),
    deleteAllCompletedTask: ()=> dispatch(deleteAllCompletedTask()),
    deleteTask: (taskId: number) => dispatch(deleteTask(taskId)),
    updateCurrentStatus: (status: number) => dispatch(updateCurrentStatus(status)),
});

export const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content);

