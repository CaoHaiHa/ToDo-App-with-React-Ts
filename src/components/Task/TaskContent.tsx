import styled from 'styled-components';
import { useAppSelector } from '../../redux/hook';

const TaskContentContainer = styled.div`
    width: 400px;

    &.active {
        text-decoration: line-through 2px;
    }
`;

interface Props {
    index: number
    taskContent: string
}

const TaskContent = (props: Props) => {
    const { index, taskContent } = props
    const listTask = useAppSelector(state => state.task.listTask)

    return (
        <TaskContentContainer className={`task-content ${listTask[index].status ? 'active' : ''}`}>
            {taskContent}
        </TaskContentContainer>
    )
}

export default TaskContent