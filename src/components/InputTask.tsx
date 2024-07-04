import { LuPlus } from "react-icons/lu";
import { useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from "../redux/hook";
import { createTask } from "../redux/task/task.slide";

const InputTaskContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 17px;
    align-items: center;
    margin: 0 34%;
`
const InputTaskContent = styled.input`
    width: 490px;
    padding: 20px 15px;
    color: black;
    background: #ffd353;
    border: solid 1px black;
    border-radius: 10px;
    font-size: 13px;
`
const ButtonSubmit = styled.div`
    border: solid 1px black;
    font-size: 34px;
    border-radius: 15px;
    background: #ffd353;
    color: black;
    padding-left: 8px;
    height: 64px;
    width: 50px;
    margin-left: 11px;

    &:hover {
        background: #ffeaae;
        color: rgb(48, 48, 48);
    }
`

const InputTask = () => {

    const [content, setContent] = useState<string | undefined>()
    const dispatch = useAppDispatch()

    return (
        <InputTaskContainer>
            <InputTaskContent
                placeholder="Write your next task"
                className='input-task'
                type="text"
                onChange={(event) => setContent(event.target.value)}
            />
            <ButtonSubmit>
                <LuPlus
                    className='button-submit'
                    onClick={() => {
                        dispatch(createTask(content))
                    }}
                />
            </ButtonSubmit>
        </InputTaskContainer>
    )
}

export default InputTask