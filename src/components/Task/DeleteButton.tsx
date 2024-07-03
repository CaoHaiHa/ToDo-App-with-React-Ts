import styled from 'styled-components';
import { FaRegTrashAlt } from "react-icons/fa";
import { useAppDispatch } from '../../redux/hook';
import { Task, deleteTask } from '../../redux/task/task.slide';

const DeleteButtonContainer = styled.div`
    font-size: 30px;

    &:hover {
        color: rgb(196, 196, 196);
    }
`

interface Props {
    item: Task,
}

const DeleteButton = (props: Props) => {

    const { item } = props
    const dispatch = useAppDispatch()

    return (
        <DeleteButtonContainer>
            <FaRegTrashAlt
                onClick={() => { dispatch(deleteTask(item)) }}
            />
        </DeleteButtonContainer>
    )
}

export default DeleteButton