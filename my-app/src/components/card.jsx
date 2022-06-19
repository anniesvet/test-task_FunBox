import React from "react";
import cardStyles from '../assets/styles/Card.module.css';

function Card (props) {
    return (
        <div>
            <div className="wrapper">
                <div className={cardStyles.card} style={{backgroundImage: props.backgroundImage}}>
                    <section className={cardStyles.card_main}>
                        <div className={cardStyles.top_text}>Сказочное заморское яство</div>
                            <div className="main-info">
                                <h1 className={cardStyles.main_title}>{props.title}</h1>
                                <h4 className={cardStyles.main_taste}>{props.taste}</h4>
                                <p className={cardStyles.main_portion}>{props.portion}</p>
                                <p className={cardStyles.main_condition}>{props.condition}</p>
                            </div>
                    </section> 
                    <div>
                        <p className={cardStyles.down_text}>Чего сидишь? Порадуй котэ, <span className={cardStyles.down_text_blue}>купи.</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card