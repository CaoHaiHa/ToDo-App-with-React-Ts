import { createSlice } from '@reduxjs/toolkit'

export interface Task {
    id: number,
    task: string
}

const initialState: {
    listTask: Task[]

} = {
    listTask: []
}

export const listTaskSlice = createSlice({
    name: 'listTask',
    initialState,
    reducers: {
        createTask(state, actions) {
            const task = { id: state.listTask.length + 1, task: actions.payload }
            state.listTask = [...state.listTask, task]
        },
        updateTask(state, actions) {
            const task = actions.payload
            const newListTask = state.listTask.map((item) => {
                if (task.id === item.id) {
                    return task
                }
                else {
                    return item
                }
            })
            state.listTask = [...newListTask]
        },
        deleteTask(state, actions) {
            const task = actions.payload
            state.listTask = state.listTask.filter((item) => item.id !== task.id)
        }
    },
})

export const { createTask, updateTask, deleteTask } = listTaskSlice.actions

export default listTaskSlice.reducer