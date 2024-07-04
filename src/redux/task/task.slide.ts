import { createSlice } from '@reduxjs/toolkit'

export interface TaskType {
    id: number
    content: string
    status: boolean
}

const initialState: {
    listTask: TaskType[]

} = {
    listTask: [],
}

export const listTaskSlice = createSlice({
    name: 'listTask',
    initialState,
    reducers: {
        createTask(state, actions) {
            const task = { id: state.listTask.length + 1, content: actions.payload, status: false }
            state.listTask = [...state.listTask, task]
        },
        updateTask(state, actions) {
            const newTask = actions.payload
            const newListTask = state.listTask.map((task) => {
                if (newTask.id === task.id) {
                    return newTask
                }
                else {
                    return task
                }
            })
            state.listTask = [...newListTask]
        },
        deleteTask(state, actions) {
            const newTask = actions.payload
            const newListTask: TaskType[] = state.listTask
            newListTask.forEach((task: TaskType, index: number) => {
                if (task.id === newTask.id) {
                    newListTask.splice(index, 1)
                }
            })
            state.listTask = newListTask
        },
        changeTaskStatus(state, actions) {
            const newListTask: TaskType[] = state.listTask.map((task: TaskType, index: number) => {
                if (index === actions.payload) {
                    let newTask: TaskType = { id: task.id, content: task.content, status: !task.status }
                    return newTask
                } else {
                    return task
                }
            })
            state.listTask = newListTask
        },
    },
})

export const { createTask, updateTask, deleteTask, changeTaskStatus } = listTaskSlice.actions

export default listTaskSlice.reducer