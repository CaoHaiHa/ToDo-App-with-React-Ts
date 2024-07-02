import styled from 'styled-components';
import { FaRegTrashAlt } from "react-icons/fa";

const DeleteButtonContainer = styled.div`
    font-size: 30px;

    &:hover {
        color: rgb(196, 196, 196);
    }
`;

interface ListTask {
    id: number,
    task: string,
}

interface Props {
    handleClickDeleteTask: (task: ListTask, index: number) => void
    item: ListTask,
    index: number
}

const DeleteButton = (props: Props) => {

    const { handleClickDeleteTask, item, index } = props

    return (
        <DeleteButtonContainer>
            <FaRegTrashAlt
                onClick={() => handleClickDeleteTask(item, index)}
            />
        </DeleteButtonContainer>
    )
}

export default DeleteButton