import { useState } from 'react'
import InputTask from './InputTask'
import Task from './Task/Task'
import CountTask from './CountTask'
import { useAppDispatch } from '../redux/hook'

const ManageTask = () => {

    const [buttonPressedState, setButtonPressedState] = useState<boolean[]>([]);
    const dispatch = useAppDispatch()

    const handleButtonClick = (index: number): void => {
        setButtonPressedState(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        })
    };

    return (
        <div>
            <CountTask
                buttonPressedState={buttonPressedState}
            />
            <InputTask />
            <Task
                handleButtonClick={handleButtonClick}
                buttonPressedState={buttonPressedState}
            />
        </div>
    )
}

export default ManageTask