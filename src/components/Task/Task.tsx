import '../Components_SCSS.scss'
import { HiPencilSquare } from "react-icons/hi2";
import { FaRegTrashAlt } from "react-icons/fa";
import { useEffect, useState } from 'react'
import TaskDoing from './TaskDoing'
import TaskContent from './TaskContent';

interface ListTask {
    id: number,
    task: string
}

interface Props {
    listTask: ListTask[] | undefined,
    handleClickDeleteTask: (task: ListTask) => void
    handleButtonClick: (index: number) => void
    buttonPressedState: boolean[]
    handleClickEditTask: (task: ListTask) => void
}

const Task = (props: Props) => {

    const { listTask, handleClickDeleteTask, handleButtonClick, buttonPressedState, handleClickEditTask } = props

    return (
        <div>
            {listTask && listTask.length > 0 &&
                listTask.map((item, index) => {
                    return (
                        <div className='task-container' key={index}>
                            <TaskDoing
                                index={index}
                                handleButtonClick={handleButtonClick}
                                buttonPressedState={buttonPressedState}
                            />
                            <TaskContent
                                index={index}
                                content={item.task}
                                buttonPressedState={buttonPressedState}
                            />
                            <div className='task-edit'>
                                <HiPencilSquare
                                    onClick={() => {
                                        let newTaskContent: string | null = prompt('Enter new task')
                                        if (newTaskContent) {
                                            let newTask: ListTask = { id: item.id, task: newTaskContent }
                                            handleClickEditTask(newTask)
                                        }
                                    }}
                                />
                            </div>
                            <div className='task-delete'>
                                <FaRegTrashAlt
                                    onClick={() => handleClickDeleteTask(item)}
                                />
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}

export default Task
