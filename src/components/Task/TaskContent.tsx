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
    content: string
    buttonPressedState: boolean[]
}

const TaskContent = (props: Props) => {
    const { index, content, buttonPressedState } = props

    return (
        <TaskContentContainer className={`task-content ${buttonPressedState[index] ? 'active' : ''}`}>
            {content}
        </TaskContentContainer>
    )
}

export default TaskContent