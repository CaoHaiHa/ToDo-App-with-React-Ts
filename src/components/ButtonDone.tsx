
import { useState } from 'react';
import './Components_SCSS.scss'

const ButtonDone = () => {
    const [isButtonPressed, setIsButtonPressed] = useState(false);

    const handleButtonClick = () => {
        setIsButtonPressed(!isButtonPressed);
    };
    return (
        <div>

        </div>
    )
}

export default ButtonDone