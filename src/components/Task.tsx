// import './Components_SCSS.scss'
// import { HiPencilSquare } from "react-icons/hi2";
// import { FaRegTrashAlt } from "react-icons/fa";
// import { useCallback, useState } from 'react';

// interface Props {
//     listTask: string[] | undefined,
// }

// const Task = (props: Props) => {

//     const { listTask } = props
//     const [isButtonPressed, setIsButtonPressed] = useState(false);

//     const handleButtonClick = () => {
//         setIsButtonPressed(!isButtonPressed);
//     };


//     return (
//         <div>
//             {listTask && listTask.length > 0 &&
//                 listTask.map((task: string, index: number) => {
//                     return (
//                         <div className='task-container' key={index}>
//                             <div className={`task-doing ${isButtonPressed ? 'active' : ''}`}
//                                 onClick={handleButtonClick}
//                             >
//                             </div>
//                             <div className={`task-content ${isButtonPressed ? 'active' : ''}`}>
//                                 {task}
//                             </div>
//                             <div className='task-edit'>
//                                 <HiPencilSquare />
//                             </div>
//                             <div className='task-delete'>
//                                 <FaRegTrashAlt />
//                             </div>
//                         </div>
//                     )
//                 })}
//         </div>
//     )
// }

// export default Task

import React, { useState } from 'react';
import './Components_SCSS.scss'
import { HiPencilSquare } from "react-icons/hi2";
import { FaRegTrashAlt } from "react-icons/fa";

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
                            <div className={`task-doing ${buttonPressedState[index] ? 'active' : ''}`}
                                onClick={() => handleButtonClick(index)}
                            >
                            </div>
                            <div className={`task-content ${buttonPressedState[index] ? 'active' : ''}`}>
                                {item.task}
                            </div>
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
