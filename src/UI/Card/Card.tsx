// @ts-ignore
import Z from './Card.module.css';

type CardPropsType = {
    primaryHeader: string,
    text: string,
}

export const Card = (props: CardPropsType) => {
    return (
        <div className={Z.card_container} >
            <div className={Z.header_section}>
                {props.primaryHeader}
            </div>
            <div className={Z.text_section}>
                {props.text}
            </div>
        </div>
    )
}