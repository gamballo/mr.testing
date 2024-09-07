// @ts-ignore
import z from "./About.module.css"

import about from "../../assets/About/about.png"
// @ts-ignore
import {AboutCard} from "../../UI/Card/AboutCard/AboutCard.tsx";


export const About = () => {
    return (
        <article className={z.about}>
            <div className={z.card_section}>
                <div className={z.card_section1}>
                    <AboutCard
                        style={"default"} headerStyle={"h2"}
                        headerText={"DocDog - это"}
                        cardText={"Широкий спектр профессиональных услуг для ваших любимых питомцев. "
                            + "В нашей клинике работают опытные ветеринары, которые постоянно совершенствуют свои навыки и знания."}/>
                </div>
                <div className={z.card_section2}>
                    <AboutCard
                        style={'primary'}
                        headerStyle={'h3'}
                        headerText={'Комплексное обслуживание'}
                        cardText={'В клинике предоставляют полный спектр услуг, начиная от первичной консультации и заканчивая проведением сложных операций.'}/>
                </div>
                <div className={z.card_section3}>
                    <AboutCard
                        style={'primary'}
                        headerStyle={'h3'} headerText={'Современное оборудование'}
                        cardText={'Клиника оснащена новейшим оборудованием, что позволяет проводить быструю и точную диагностику заболеваний у собак.'}/>
                </div>
                <div className={z.card_section4}>
                    <AboutCard
                    style={'primary'} headerStyle={'h3'}
                    headerText={'Квалифицированный персонал'}
                    cardText={'Все сотрудники клиники имеют профильное образование и регулярно повышают свою квалификацию.'}/>
                </div>

                <div className={z.card_section5}>
                    <AboutCard
                    style={'primary'} headerStyle={'h3'}
                    headerText={'Индивидуальный подход'}
                    cardText={'Врачи учитывают особенности каждой породы, чтобы разработать наиболее эффективный план лечения для конкретного питомца.'}/>
                </div>
                <div className={z.card_section6}>
                    <AboutCard
                    style={'primary'}
                    headerStyle={'h3'}
                    headerText={'Удобное расположение'}
                    cardText={'Клиника находится вблизи с основными транспортными развязками, что делает её доступной для большинства владельцев животных.'}/>
                </div>
                <div className={z.img_section}>
                    <img src={about} alt="logo"/>
                </div>
            </div>

        </article>


    )
}