export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const UPDATE_TASK_CHECKED = "UPDATE_TASK_CHECKED";
export const UPDATE_TASK_STATUS = "UPDATE_TASK_STATUS";
export const UPDATE_CURRENT_STATUS = "UPDATE_CURRENT_STATUS";
export const DELETE_ALL_COMPELTED_TASK="DELETE_ALL_COMPELTED_TASK";


export const addTask=(taskName:string)=> (
    {
        checked:false,
        status:1,
        taskContent:taskName,
        type: ADD_TASK
    }
);

export const deleteTask=(taskId:number)=> (
    {
        taskNumber:taskId,
        type: DELETE_TASK
    }
);

export const changeToCompleted=(taskId:number)=> (
    {
        taskNumber:taskId,
        type: UPDATE_TASK_CHECKED
    }
);


export const updateCurrentStatus=(status:number)=> (
    {
        status,
        type: UPDATE_CURRENT_STATUS
    }
);


export const changeTaskStatus=(taskId:number,status:number)=> (
    {
        status,
        taskNumber:taskId,
        type: UPDATE_TASK_STATUS,
    }
);



export const deleteAllCompletedTask=()=> (
    {
        type: DELETE_ALL_COMPELTED_TASK,
    }
);