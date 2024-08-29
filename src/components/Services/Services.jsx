import s from "./Services.module.css"
import {ServiseCard} from "../../UI/ServiseCard/ServiseCard.tsx";
import kal from "../../assets/Servise/kal.png.png"
import check from "../../assets/Servise/checkout.png.png"
import price from "../../assets/Servise/price.png"
import pashokmiliy from "../../assets/Servise/onetimeprice.png"
import pashokdobiy from "../../assets/Servise/spashnomnakal.png"


export const Services = () => {
    return (
        <div className={s.services}>
            <h2 className={s.section_header}>Наши услуги</h2>
            <div className={s.card_section}>
                <div className={s.first_el}>
                    <ServiseCard
                        title={"Анализы"}
                        text={"Общий анализ.......................от 500 Р Биохимический Анализ....от 1000 Р Общий анализ мочи.............от 700 Р Анализ на паразито............от 800 Р"}
                        image={kal}/>
                </div>
                <div className={s.second_el}>
                    <ServiseCard
                        title={"Плановый осмотр"}
                        text={"от 900Р"}
                        image={check}
                        />
                </div>
                <div className={s.third_el}>
                <ServiseCard
                    title={"Вакцинация"}
                    text={"Против бешенства............от 1000 Р Против чумы.......................от 2000 Р Против гепатита................от 2500 Р Против завода...................от 3000 Р"}
                    image={price}
                    />
                </div>
                <div className={s.fourth_el}>
                    <ServiseCard
                        title={"Разовый прием"}
                        text={"от 1000Р"}
                        image={pashokmiliy}
                        />
                </div>
                <div className={s.five_el}>
                    <ServiseCard
                        title={"Физиопроцедуры*"}
                        text={"Лазерная терапия ..............от 700 Р Магнитотерапия..................от 800 Р Электротерапия..................от 900 Р Тепловая терапия...............от 600 Р"}
                        image={pashokdobiy}
                        />
                </div>
            </div>

        </div>


    )
}