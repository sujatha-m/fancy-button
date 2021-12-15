import React from 'react';

function LightSwitchButton() {
    return(
        <button className='LightSwitchButton'>
            <span className='on'><i>💡</i>I'm ON!</span>
            <span className='off'><i>💡</i>I'm OFF!</span>
        </button>
    )
}

export default LightSwitchButton;