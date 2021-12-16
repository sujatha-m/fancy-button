import React from 'react';

function LightSwitchButton(props) {

    const {light, switchLight} = props;
  
    return(
        <button onClick={switchLight} className='LightSwitchButton'>
            {light === 'on' && <span className='on'><i>💡</i>I'm ON!</span>}
            {light === 'off' &&  <span className='off'><i>💡</i>I'm OFF!</span>}
        </button>
    )
}

export default LightSwitchButton;