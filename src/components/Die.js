import React from 'react';

export default function Die(props) {

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    return (
        <div onClick={props.holdDice} style={styles} className='dice'>
            {props.value}
        </div>
    )
}