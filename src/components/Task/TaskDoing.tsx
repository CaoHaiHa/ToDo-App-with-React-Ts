import styled from 'styled-components';

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
    handleButtonClick: (index: number) => void
    buttonPressedState: boolean[]
}

const TaskDoing = (props: Props) => {

    const { index, handleButtonClick, buttonPressedState } = props

    return (
        <TaskDoingContainer className={`${buttonPressedState[index] ? 'active' : ''}`}
            onClick={() => handleButtonClick(index)}
        >
        </TaskDoingContainer>
    )
}
export default TaskDoing