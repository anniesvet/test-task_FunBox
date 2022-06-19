import React, {useState, useEffect} from "react";
import Card from "./card"
import cardStyles from '../assets/styles/Card.module.css';

let cards = [
    {title:"Нямушка", taste:"с фуа-гра", portion:"10 порций",condition:"мышь в подарок", backgroundImage: `url("https://i.ibb.co/Z8tgkc9/Fua-gra-background.png")`},
    {title:"Нямушка", taste:"с рыбой", portion:"40 порций",condition:"2 мыши в подарок", backgroundColor: "white", backgroundImage: `url("https://i.ibb.co/0hHftVc/Fish-in-stock.png")`},
    {title:"Нямушка", taste:"с курой", portion:"100 порций",condition:"5 мышей в подарок", backgroundImage: `url("https://i.ibb.co/Y7nQ2Q8/Chiken-in-stock.png")`}
    ];


function Content () {

    return (
        
        <div className={cardStyles.content}>
        {
        cards.map((card) => (
            <Card title={card.title} taste={card.taste} portion={card.portion} condition={card.condition} backgroundImage={card.backgroundImage}/>
        ))}
        </div>
    )
}

export default Content