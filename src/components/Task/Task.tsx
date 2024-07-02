import styled from 'styled-components';
import TaskDoing from './TaskDoing'
import TaskContent from './TaskContent';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

const TaskContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    border: solid 1px white;
    margin: 10px 35%;
    padding: 10px 15px;
    align-items: center;
`;

interface ListTask {
    id: number,
    task: string
}

interface Props {
    listTask: ListTask[] | undefined,
    handleClickDeleteTask: (task: ListTask, index: number) => void
    handleButtonClick: (index: number) => void
    buttonPressedState: boolean[]
    handleClickEditTask: (task: ListTask) => void
}

const Task = (props: Props) => {

    const { listTask, handleClickDeleteTask, handleButtonClick, buttonPressedState, handleClickEditTask } = props

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
                                handleClickEditTask={handleClickEditTask}
                                itemId={item.id}
                            />
                            <DeleteButton
                                handleClickDeleteTask={handleClickDeleteTask}
                                item={item}
                                index={index}
                            />
                        </TaskContainer>
                    )
                })}
        </div>
    )
}

export default Task
