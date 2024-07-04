import { HiPencilSquare } from "react-icons/hi2";
import styled from 'styled-components';
import { useAppDispatch } from "../../redux/hook";
import { TaskType, updateTask } from "../../redux/task/task.slide";

const EditButtonContainer = styled.div`
    font-size: 30px;

    &:hover {
        color: rgb(196, 196, 196);
    }
`;

interface Props {
    task: TaskType
}

const EditButton = (props: Props) => {

    const { task } = props
    const dispatch = useAppDispatch()

    return (
        <EditButtonContainer>
            <HiPencilSquare
                onClick={() => {
                    let newTaskContent: string | null = prompt('Enter new task')
                    if (newTaskContent) {
                        let newTask: TaskType = { id: task.id, content: newTaskContent, status: task.status }
                        dispatch(updateTask(newTask))
                    }
                }}
            />
        </EditButtonContainer>
    )
}

export default EditButton