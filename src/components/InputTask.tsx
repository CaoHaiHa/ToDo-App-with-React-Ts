import './Components_SCSS.scss'
import { LuPlus } from "react-icons/lu";
import { useEffect, useState } from 'react';



const InputTask = (props: any) => {

    const [submit, setSubmit] = useState<string>('')

    return (
        <div className='input-task-container'>
            <input
                placeholder="Write your next task"
                className='input-task'
                type="text"
                onChange={(event) => setSubmit(event.target.value)}
            />
            <LuPlus
                className='button-submit'
                onClick={() => props.handleClickGetTask(submit)}
            />
        </div>
    )
}

export default InputTask