//import React from 'react';
import { ShopItem } from './ShopItem/ShopItem';

export const ListView = (props) => {
    return (
        <>
        {props.items.map((item, index)=>{
            return (
                <div className="window-line">
                  <ShopItem item = {item}/>
                </div>
            )
        })
        }          
        </>
    )
}