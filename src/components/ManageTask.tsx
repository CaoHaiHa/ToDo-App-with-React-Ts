import { useEffect, useState } from 'react'
import InputTask from './InputTask'
import Task from './Task/Task'
import CountTask from './CountTask'

interface ListTask {
    id: number,
    task: string
}

const ManageTask = () => {

    const [listTask, setListTask] = useState<ListTask[] | undefined>()
    const [buttonPressedState, setButtonPressedState] = useState<boolean[]>([]);

    const handleClickGetTask = (task: string): void => {
        let newListTask: ListTask[] = []
        if (listTask !== undefined) {
            newListTask = [...listTask]
        }
        let newTask: ListTask = { id: newListTask.length + 1, task: task }
        newListTask = [...newListTask, newTask]
        setListTask(newListTask)
    }

    const handleClickDeleteTask = (task: ListTask): void => {
        let newListTask: ListTask[] = []
        if (listTask !== undefined) {
            newListTask = [...listTask]
        }
        newListTask = newListTask.filter((item) => item.id !== task.id)
        setListTask(newListTask)
    }

    const handleButtonClick = (index: number): void => {
        setButtonPressedState(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        })
    };

    const handleClickEditTask = (task: ListTask): void => {
        let newListTask: ListTask[] = []
        if (listTask !== undefined) {
            newListTask = [...listTask]
        }
        newListTask = newListTask.map((item) => {
            if (task.id === item.id) {
                return task
            }
            else {
                return item
            }
        })
        setListTask(newListTask)
    }

    return (
        <div>
            <CountTask
                ListTaskSize={listTask?.length}
                buttonPressedState={buttonPressedState}
            />
            <InputTask
                handleClickGetTask={handleClickGetTask}
            />
            <Task
                listTask={listTask}
                handleClickDeleteTask={handleClickDeleteTask}
                handleButtonClick={handleButtonClick}
                buttonPressedState={buttonPressedState}
                handleClickEditTask={handleClickEditTask}
            />
        </div>
    )
}

export default ManageTask