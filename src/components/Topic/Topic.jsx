import "./Topic.modules.css"
import pashok_sobaka from "../../assets/topic/pashok_sobaka.png"
import DOCDOG from "../../assets/topic/DOCDOG.svg"
import {Button} from "../../UI/button/Button.tsx";
import {Card} from "../../UI/Card/Card.tsx";

export const Topic = () => {
    return (
        <div className={"topic"}>
            <div className={"main-content"}>
                <div className={"logo-content"}>
                    <img src={DOCDOG} alt="logo"/>
                </div>
                <div className={"header-content"}>
                    <h2 className={"section-header"}>
                        Забота на каждом шагу
                    </h2>
                    <h3 className={"section-text"}>
                        Ветеринарная клиника для породистых собак
                    </h3>
                    <div className={"sub-text"}>
                    <Button btnText={"Запишись на приём"} addedClassname={"primary"}/>
                    <Button btnText={"Вызвать врача на дом"} addedClassname={"secondary"}/>
                    </div>
                </div>
                <div className={"item-row"}>
                    <Card primaryHeader={"10"}
                          text={"лет заботимся о ваших питомцах"}/>
                    <Card primaryHeader={"5"}
                          text={"лет - минимальный опыт каждого нашего специалиста"}/>
                    <Card primaryHeader={"70%"}
                          text={"наших клиентов рекомендуют нас СВОим друзьям"}/>
                </div>

            </div>
            <div className={"img-content"}>
                <img src={pashok_sobaka} />
            </div>

        </div>
    )
}