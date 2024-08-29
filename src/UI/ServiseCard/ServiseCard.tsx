// @ts-ignore
import z from './ServiseCard.module.css'
import {Button} from "../button/Button";

type  ServiseCardProps = {
    title : string,
    text: string,
    image: string,
    addedClassName: string,
}
export const ServiseCard =(props: ServiseCardProps) => {
   return (
           <div className={z.card_container}>
               <div className={z.left_side}>
                   <h3 className={z.card_header}>{props.title}</h3>
                   <p className={z.card_text}>{props.text}</p>
                   <div className={z.custom_button}>
                   <Button
                       btnText={"Узнать подробнее"}
                       addedClassname={"default"}/>
                   </div>
               </div>
               <div className={z.right_side}>
                   <div className={z.card_pic} >
                    <img src={props.image} />
                   </div>
               </div>
           </div>

   )
}