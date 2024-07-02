import { HiPencilSquare } from "react-icons/hi2";
import styled from 'styled-components';

const EditButtonContainer = styled.div`
    font-size: 30px;

    &:hover {
        color: rgb(196, 196, 196);
    }
`;

interface ListTask {
    id: number,
    task: string
}

interface Props {
    handleClickEditTask: (task: ListTask) => void
    itemId: number
}

const EditButton = (props: Props) => {

    const { handleClickEditTask, itemId } = props

    return (
        <EditButtonContainer>
            <HiPencilSquare
                onClick={() => {
                    let newTaskContent: string | null = prompt('Enter new task')
                    if (newTaskContent) {
                        let newTask: ListTask = { id: itemId, task: newTaskContent }
                        handleClickEditTask(newTask)
                    }
                }}
            />
        </EditButtonContainer>
    )
}

export default EditButton