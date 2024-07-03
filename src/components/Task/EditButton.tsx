import { HiPencilSquare } from "react-icons/hi2";
import styled from 'styled-components';
import { ListTask } from "../ManageTask";
import { useAppDispatch } from "../../redux/hook";
import { updateTask } from "../../redux/task/task.slide";

const EditButtonContainer = styled.div`
    font-size: 30px;

    &:hover {
        color: rgb(196, 196, 196);
    }
`;

interface Props {
    itemId: number
}

const EditButton = (props: Props) => {

    const { itemId } = props
    const dispatch = useAppDispatch()

    return (
        <EditButtonContainer>
            <HiPencilSquare
                onClick={() => {
                    let newTaskContent: string | null = prompt('Enter new task')
                    if (newTaskContent) {
                        let newTask: ListTask = { id: itemId, task: newTaskContent }
                        dispatch(updateTask(newTask))
                    }
                }}
            />
        </EditButtonContainer>
    )
}

export default EditButton