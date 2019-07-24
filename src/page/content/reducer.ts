import {combineReducers} from "redux";
import {
    ADD_TASK,
    DELETE_ALL_COMPELTED_TASK,
    DELETE_TASK,
    UPDATE_CURRENT_STATUS,
    UPDATE_TASK_CHECKED,
    UPDATE_TASK_STATUS
} from "./action";
export interface ITodolistRes {
    todoApp: ITodolist
}


export interface ITodolist {
    todoLists: ITask[],
    currentStatus:number
}

const initialState: ITodolist = {
    currentStatus:0,
    todoLists: []
};

export interface ITask {
    checked: boolean,
    status: number,
    taskContent: string
}

export const todoAppReducer = (state = initialState, action: any):ITodolist => {
    switch (action.type) {
        case  ADD_TASK:
            const todoLists = [...state.todoLists];
            todoLists.push({
                checked: false,
                status: 1,
                taskContent: action.taskContent,
            });
            return {...state, todoLists};
        case DELETE_TASK:
            const newList = [...state.todoLists];
            newList.splice(action.taskNumber, 1);
            return {...state, todoLists: newList};
        case UPDATE_TASK_CHECKED:
            const copyList = [...state.todoLists];
            const oldCheck = copyList[action.taskNumber]!.checked;
            copyList[action.taskNumber]!.checked = !oldCheck;
            return {...state, todoLists: copyList};
        case UPDATE_CURRENT_STATUS:
            return {...state, currentStatus: action.status};
        case UPDATE_TASK_STATUS:
            const aimList = [...state.todoLists];
            aimList[action.taskNumber]!.status = action.status;
            return {...state, todoLists: aimList};
        case DELETE_ALL_COMPELTED_TASK:
            const list = [...state.todoLists];
            const liveList = list.filter((value: ITask) => (value.status !== 2))
            return {...state, todoLists: liveList};
        default:
            return {...initialState};

    }

};

export  const rootReducer= combineReducers({
    todoApp:todoAppReducer
});

