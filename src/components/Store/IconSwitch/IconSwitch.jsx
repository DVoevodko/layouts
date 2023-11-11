//import React from 'react';

export const IconSwitch = (props) => {
    return(
        <div>
            <button onClick ={()=> props.onSwitch()}>  
                <span class="material-icons"> {props.icon}</span>
            </button>
        </div>

    )
}