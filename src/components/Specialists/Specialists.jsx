import z from "./Specialists.module.css"
import arrow_left from "../../assets/Specialists/arrow_left.svg"
import arrow_rigth from "../../assets/Specialists/arrow_rigth.svg"
import sert1 from "../../assets/Specialists/sert1.png"
import sert2 from "../../assets/Specialists/sert2.png"
import sert3 from "../../assets/Specialists/sert3.png"
import sert4 from "../../assets/Specialists/sert4.png"
import elena from "../../assets/Specialists/elena.png"


export const Specialists = () => {
    return (
        <article className={z.specialists_container}>
            <h2 className={"section-header"}>Наши специалисты</h2>
            <div className={z.nav_section}>
                <div className={z.navigation}>
                    <ul className={z.nav_list}>
                        <li className={z.nav_item + " " + z.nav_item_active}>Хирурги</li>
                        <li className={z.nav_item}>Узисты</li>
                        <li className={z.nav_item}>Лаборанты</li>
                        <li className={z.nav_item}>Кардиологи</li>
                    </ul>
                </div>
                <div className={z.btn_section}>
                    <div className={z.btn_left}>
                        <button>
                            <img src={arrow_left}/>
                        </button>
                    </div>
                    <div className={z.btn_rigth}>
                        <button>
                            <img src={arrow_rigth}/>
                        </button>
                    </div>
                </div>
            </div>
            <div className={z.desc_section}>
                <div className={z.desc1}>
                    <div className={z.desc_first_block}>
                        <h3 className={z.desc_header}>Елена Лягина</h3>
                        <p className={z.desc_text}>
                            стаж: 20 лет <br/>
                            Заслуженный ветеринарный врач Российской Федерации.<br/>
                            Орден «За заслуги перед ветеринарией».<br/>
                            Медаль «За вклад в развитие ветеринарной медицины».<br/>
                        </p>
                    </div>
                    <div className={z.decs1_pic}>
                        <img src={sert1}/>
                        <img src={sert2}/>
                        <img src={sert3}/>
                        <img src={sert4}/>
                    </div>
                </div>
                <div className={z.desc2}>
                    <div className={z.desc2_pic}>
                        <img src={elena}/>
                    </div>
                </div>
                </div>

        </article>


)
}