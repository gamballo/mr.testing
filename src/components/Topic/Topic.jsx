import "./Topic.module.css"
import pashok_sobaka from "../../assets/topic/pashok_sobaka.png"
import DOCDOG from "../../assets/topic/DOCDOG.svg"
import {Button} from "../../UI/button/Button.tsx";
import {Card} from "../../UI/Card/Card.tsx";
import style from "./Topic.module.css";

export const Topic = () => {
    return (
        <div className={style.topic}>
            <div className={style.main_content}>
                <div className={style.logo_content}>
                    <img src={DOCDOG} alt="logo"/>
                </div>
                <div className={style.header_content}>
                    <h2 className={style.section_header}>
                        Забота на каждом шагу
                    </h2>
                    <h3 className={style.section_text}>
                        Ветеринарная клиника для породистых собак
                    </h3>
                    <div className={style.sub_text}>
                    <Button btnText={"Запишись на приём"} addedClassname={"primary"}/>
                    <Button btnText={"Вызвать врача на дом"} addedClassname={"secondary"}/>
                    </div>
                </div>
                <div className={style.item_row}>
                    <Card primaryHeader={"10"}
                          text={"лет заботимся о здоровье ваших питомцах"}/>
                    <Card primaryHeader={"5"}
                          text={"лет - минимальный опыт каждого нашего специалиста"}/>
                    <Card primaryHeader={"70%"}
                          text={"наших клиентов рекомендуют нас СВОим друзьям"}/>
                </div>

            </div>
            <div className={style.img_content}>
                <img src={pashok_sobaka} />
            </div>

        </div>
    )
}