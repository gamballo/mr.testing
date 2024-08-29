import "./Header.module.css"
import header_logo from "../../assets/Header/header_logo.svg"
import lupa from "../../assets/Header/lupa.svg"
import style from "./Header.module.css"

export const Header = () => {
    return (
        <div className= {style.header_wrapper} >
            <div className = {style.header_navigation}>
                <div className = {style.header_logo}>
                    <img src={header_logo} alt="logo" />
                </div>
                <div className = {style.header_menu}>
                    <ul>
                        <li>Услуги</li>
                        <li>Наши Врачи</li>
                        <li>О нас</li>
                        <li>Видеоотзывы</li>
                        <li>Контакты</li>
                    </ul>
                </div>
            </div>
            <div className = {style.header_contacts} >
                <div className={style.header_lupa}>
                    <img src={lupa} alt="logo" />
                </div>
                <div className={style.header_contact}>
                    <a href ="tel:+71111111111" >+7 (123) 456-78-90</a>
                </div>
            </div>
        </div>
    )
}