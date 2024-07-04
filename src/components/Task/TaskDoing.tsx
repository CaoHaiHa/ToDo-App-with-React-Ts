import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { changeTaskStatus } from '../../redux/task/task.slide';

const TaskDoingContainer = styled.div`
    border: solid 1px rgb(0 237 239);
    width: 30px;
    height: 30px;
    border-radius: 100%;

    &:hover {
        border: solid 1px rgb(194 254 255);
    }

    &.active {
        width: 30px;
        height: 30px;
        border: none;
        background-color: rgb(0 237 239);
    }
`;

interface Props {
    index: number
}

const TaskDoing = (props: Props) => {

    const { index } = props
    const dispatch = useAppDispatch()
    const listTask = useAppSelector(state => state.task.listTask)

    return (
        <TaskDoingContainer className={`${listTask[index].status ? 'active' : ''}`}
            onClick={() => dispatch(changeTaskStatus(index))}
        >
        </TaskDoingContainer>
    )
}
export default TaskDoing