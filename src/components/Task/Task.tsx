import styled from 'styled-components';
import TaskDoing from './TaskDoing'
import TaskContent from './TaskContent';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import { useAppSelector } from '../../redux/hook';
import { TaskType } from '../../redux/task/task.slide';

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

const Task = () => {
    const listTask: TaskType[] = useAppSelector(state => state.task.listTask)

    return (
        <div>
            {listTask && listTask.length > 0 &&
                listTask.map((task: TaskType, index: number) => {
                    return (
                        <TaskContainer key={task.id}>
                            <TaskDoing
                                index={index}
                            />
                            <TaskContent
                                index={index}
                                taskContent={task.content}
                            />
                            <EditButton
                                task={task}
                            />
                            <DeleteButton
                                task={task}
                            />
                        </TaskContainer>
                    )
                })}
        </div>
    )
}

export default Task
