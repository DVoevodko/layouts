//import React from 'react';
import { ShopCard } from './ShopCard/ShopCard';

export const CardsView = (props) => {
    return (
        <>
        {props.cards.map((item, index)=>{
            return (
                <div className="window">
                <ShopCard item = {item}/>
                </div>
            )
        })
        }          
        </>
    )
}