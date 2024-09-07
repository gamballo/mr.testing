
// @ts-ignore
// @ts-ignore
import z from "./AboutCard.module.css";

type AboutCardType ={
    style: "primary" | "default"
    headerStyle: "h2" | "h3"
    headerText: string
    cardText: string
}


export const AboutCard = ( props: AboutCardType) => {
    return (

            <div className={props.style === "primary"
                ? z.primary_card
                : z.default_card}>
                <h2 className={props.headerStyle === "h2"
                    ? z.header_main
                    : z.header_secondary}>
                    {props.headerText}
                </h2>
                <p className={z.card_text}>
                    {props.cardText}
                </p>
            </div>

    )
}