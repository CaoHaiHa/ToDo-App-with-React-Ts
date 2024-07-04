import styled from 'styled-components';
import { useAppSelector } from '../redux/hook';
import { TaskType } from '../redux/task/task.slide';

const CountTaskContainer = styled.div`
    margin: 40px 35%;
    border: solid 1px black;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    background: #ffa700;
`;
const Title = styled.div`
    padding: 50px;
    font-weight: 600;
`;
const TitleLarge = styled.div`
    font-size: 30px;
`;
const TitleSmall = styled.div`
    font-size: 24px;
`;
const Count = styled.div`
    border: none;
    border-radius: 100%;
    align-self: center;
    margin-left: 100px;
    padding: 40px;
    font-size: 50px;
    background: rgb(0 237 239);
    font-weight: 400;
`;

const CountTask = () => {
    const listTask: TaskType[] = useAppSelector(state => state.task.listTask)

    const countBoolean = () => {
        let count: number = 0
        listTask.forEach((task: TaskType) => {
            if (task.status === true) count++
        })
        return count
    }

    return (
        <CountTaskContainer>
            <Title>
                <TitleLarge>
                    Task Done
                </TitleLarge>
                <TitleSmall>
                    Keep it up
                </TitleSmall>
            </Title>
            <Count>
                {countBoolean()}/{listTask.length ? listTask.length : 0}
            </Count>
        </CountTaskContainer>
    )
}

export default CountTask