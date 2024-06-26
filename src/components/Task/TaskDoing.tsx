import styled from 'styled-components';

const TaskDoingContainer = styled.div`
    border: solid 1px #00c500;
    width: 30px;
    height: 30px;
    border-radius: 100%;

    &:hover {
        border: solid 1px #00df00;
    }

    &.active {
        width: 32px;
        height: 32px;
        border: none;
        background-color: #00c500;
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