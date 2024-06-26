import './Components_SCSS.scss'

interface Props {
    ListTaskSize: number | undefined
    buttonPressedState: boolean[]
}

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
        <div className="count-task-container">
            <div className="title">
                <div className="title-large">
                    Task Done
                </div>
                <div className="title-small">
                    Keep it up
                </div>
            </div>
            <div className="count">
                {countBoolean()}/{ListTaskSize ? ListTaskSize : 0}
            </div>
        </div>
    )
}

export default CountTask