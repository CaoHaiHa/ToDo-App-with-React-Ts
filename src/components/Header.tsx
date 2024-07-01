import { FaSquareCheck } from "react-icons/fa6";
import styled from 'styled-components';

const HeaderContainer = styled.div`
    margin-top: 50px;
    margin-left: 25%;
    font-size: 40px;
    font-weight: 700;
    color: aliceblue;
    align-items: center;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <FaSquareCheck /> TODO
        </HeaderContainer>
    )
}

export default Header