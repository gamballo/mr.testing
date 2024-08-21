import "./Header.modules.css"
import header_logo from "../assets/Header/header_logo.svg"
import lupa from "../assets/Header/lupa.svg"


export const Header = () => {
    return (
        <div className= {"header-wrapper"} >
            <div className = {"header-navigation"}>
                <div className = {"header-logo"}>
                    <img src={header_logo} alt="logo" />
                </div>
                <div className = {"header-menu"}>
                    <ul>
                        <li>Услуги</li>
                        <li>Наши Врачи</li>
                        <li>О нас</li>
                        <li>Видеоотзывы</li>
                        <li>Контакты</li>
                    </ul>
                </div>
            </div>
            <div className = {"header-contacts"} >
                <div className={"header-lupa"}>
                    <img src={lupa} alt="logo" />
                </div>
                <div className={"header-contact"}>
                    <a href ="tel:+71111111111" >+7 (123) 456-78-90</a>
                </div>
            </div>
        </div>
    )
}