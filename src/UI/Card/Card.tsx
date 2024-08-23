import "./Card.modules.css"

type CardPropsType = {
    primaryHeader: string,
    text: string,
}

export const Card = (props: CardPropsType) => {
    return (
        <div className={`card-container`} >
            <div className="header-section">
                {props.primaryHeader}
            </div>
            <div className="text-section">
                {props.text}
            </div>
        </div>
    )
}