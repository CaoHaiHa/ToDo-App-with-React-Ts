import styled from 'styled-components';
import TaskDoing from './TaskDoing'
import TaskContent from './TaskContent';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import { useAppSelector } from '../../redux/hook';

const TaskContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    border: solid 1px black;
    margin: 10px 35%;
    padding: 10px 15px;
    align-items: center;
    background: #ffd353;
`;

interface Props {
    handleButtonClick: (index: number) => void
    buttonPressedState: boolean[]
}

const Task = (props: Props) => {

    const { handleButtonClick, buttonPressedState } = props
    const listTask = useAppSelector(state => state.task.listTask)

    return (
        <div>
            {listTask && listTask.length > 0 &&
                listTask.map((item, index) => {
                    return (
                        <TaskContainer key={index}>
                            <TaskDoing
                                index={index}
                                handleButtonClick={handleButtonClick}
                                buttonPressedState={buttonPressedState}
                            />
                            <TaskContent
                                index={index}
                                content={item.task}
                                buttonPressedState={buttonPressedState}
                            />
                            <EditButton
                                itemId={item.id}
                            />
                            <DeleteButton
                                item={item}
                            />
                        </TaskContainer>
                    )
                })}
        </div>
    )
}

export default Task
