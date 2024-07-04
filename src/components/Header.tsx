import { FaSquareCheck } from "react-icons/fa6";
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { useEffect } from "react";
import { changeMode } from "../redux/app/app.slide";

const HeaderContainer = styled.div`        
    display: flex;
    flex-direction: row;
`

const HeaderContent = styled.div`
    margin-top: 50px;
    margin-left: 25%;
    font-size: 40px;
    font-weight: 700;
    color: #ffa700;    
`

const HeaderSwitch = styled.div`
    margin-left: 45%;
    margin-top: 30px;
`

const Header = () => {

    const mode = useAppSelector(state => state.app.mode)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const body = document.querySelector("body");
        if (body) body.setAttribute('data-bs-theme', mode);
    }, [mode])

    return (
        <HeaderContainer>
            <HeaderContent>
                <FaSquareCheck /> TODO
            </HeaderContent>
            <HeaderSwitch className="form-check form-switch">
                <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    defaultChecked={mode === 'light' ? false : true}
                    onChange={(e) => dispatch(changeMode(e.target.checked === true ? 'dark' : 'light'))}
                />
                <label className="form-check-label">{mode === "light" ? "Light mode" : "Dark mode"}</label>
            </HeaderSwitch>
        </HeaderContainer>
    )
}

export default Header