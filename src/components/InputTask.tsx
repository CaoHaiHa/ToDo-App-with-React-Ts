import { LuPlus } from "react-icons/lu";
import { SetStateAction, useState } from 'react';
import styled from 'styled-components';

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
    color: white;
    background: #505570;
    border: none;
    border-radius: 10px;
    font-size: 13px;
`
const ButtonSubmit = styled.div`
    border: none;
    font-size: 34px;
    border-radius: 15px;
    background: rgb(100, 155, 18);
    color: black;
    padding: 5px;
    height: 45px;

    &:hover {
        background: rgb(144, 206, 50);
        color: rgb(48, 48, 48);
    }
`


const InputTask = (props: any) => {

    const [submit, setSubmit] = useState<string>('')

    return (
        <InputTaskContainer>
            <InputTaskContent
                placeholder="Write your next task"
                className='input-task'
                type="text"
                onChange={(event: { target: { value: SetStateAction<string>; }; }) => setSubmit(event.target.value)}
            />
            <ButtonSubmit>
                <LuPlus
                    className='button-submit'
                    onClick={() => props.handleClickGetTask(submit)}
                />
            </ButtonSubmit>
        </InputTaskContainer>
    )
}

export default InputTask