import "./button.modules.css"

export type PropsTypes = {
    btnText: string // текст для кнопки
    addedClassname: "primary" | "secondary" | "default" // стили смотри button.modules
}

export const  Button = (props: PropsTypes)  => {
    return (
        <button className={`button ${props.addedClassname}`}>
            {props.btnText}
        </button>
    )


}