import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useAppSelector } from '../redux/hook';

interface Props {
    buttonPressedState: boolean[]
}

const CountTaskContainer = styled.div`
    margin: 40px 35%;
    border: solid 1px black;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    background: #ffd353;
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

const CountTask = (props: Props) => {

    const { buttonPressedState } = props
    const listTask = useAppSelector(state => state.task.listTask)

    const countBoolean = () => {
        let count = 0
        let newBooleanArray = [...buttonPressedState]
        newBooleanArray.forEach((item) => {
            if (item === true) count++
            return item
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