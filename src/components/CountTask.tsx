import styled from 'styled-components';

interface Props {
    ListTaskSize: number | undefined
    buttonPressedState: boolean[]
}

const CountTaskContainer = styled.div`
    margin: 40px 35%;
    border: solid 1px white;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    gap: 10px;
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
    background: rgb(100, 155, 18);
    font-weight: 400;
`;

const CountTask = (props: Props) => {

    const { ListTaskSize, buttonPressedState } = props

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
                {countBoolean()}/{ListTaskSize ? ListTaskSize : 0}
            </Count>
        </CountTaskContainer>
    )
}

export default CountTask