import styled from 'styled-components';
import { FaRegTrashAlt } from "react-icons/fa";
import { useAppDispatch } from '../../redux/hook';
import { TaskType, deleteTask } from '../../redux/task/task.slide';

const DeleteButtonContainer = styled.div`
    font-size: 30px;

    &:hover {
        color: rgb(196, 196, 196);
    }
`

interface Props {
    task: TaskType,
}

const DeleteButton = (props: Props) => {

    const { task } = props
    const dispatch = useAppDispatch()

    return (
        <DeleteButtonContainer>
            <FaRegTrashAlt
                onClick={() => {
                    dispatch(deleteTask(task))
                }}
            />
        </DeleteButtonContainer>
    )
}

export default DeleteButton