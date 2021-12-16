import React, {useState} from 'react';

function LightSwitchButton() {
    const [light, setLight] = useState('off');
    //const handleClick = () => setLight(light === "on" ? "off" : "on");
    const handleClick = () => {
        if(light === 'on'){
            setLight('off');
        }else if(light === 'off') {
            setLight('on');
        }
    }

    return(
        <button onClick={handleClick} className='LightSwitchButton'>
            {light === 'on' && <span className='on'><i>💡</i>I'm ON!</span>}
            {light === 'off' &&  <span className='off'><i>💡</i>I'm OFF!</span>}
        </button>
    )
}

export default LightSwitchButton;