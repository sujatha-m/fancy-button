import React, {useState} from 'react';

function LightSwitchButton(props) {

    const {light, setLight} = props;
    
    const handleClick = () => setLight(light === "on" ? "off" : "on");
    return(
        <button onClick={handleClick} className='LightSwitchButton'>
            {light === 'on' && <span className='on'><i>💡</i>I'm ON!</span>}
            {light === 'off' &&  <span className='off'><i>💡</i>I'm OFF!</span>}
        </button>
    )
}

export default LightSwitchButton;