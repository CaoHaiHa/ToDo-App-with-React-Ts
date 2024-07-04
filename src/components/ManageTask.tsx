import { useState } from 'react'
import InputTask from './InputTask'
import Task from './Task/Task'
import CountTask from './CountTask'
import { useAppDispatch } from '../redux/hook'

const ManageTask = () => {

    return (
        <div>
            <CountTask />
            <InputTask />
            <Task />
        </div>
    )
}

export default ManageTask