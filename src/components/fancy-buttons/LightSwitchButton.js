import React, {useState} from 'react';

function LightSwitchButton() {
    const [light, setLight] = useState('off');

    return(
        <button className='LightSwitchButton'>
            {light === 'on' && <span className='on'><i>💡</i>I'm ON!</span>}
            {light === 'off' &&  <span className='off'><i>💡</i>I'm OFF!</span>}
        </button>
    )
}

export default LightSwitchButton;