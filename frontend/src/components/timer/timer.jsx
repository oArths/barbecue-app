import React, { useState} from 'react';
import * as S from "./style"


export default function Timer  ()  {
const [minutes, setMinutes] = useState(0);
const [delayTimeout, setDelayTimeout] = useState(null);
const [increaseTimeout, setIncreaseTimeout] = useState(null);
const delayDuration = 300;


const increaseMinutes = () => {
  setMinutes(prevMinutes => (prevMinutes < 59 ? prevMinutes + 1 : 0));
};

const decreaseMinutes = () => {
  setMinutes(prevMinutes => (prevMinutes > 0 ? prevMinutes - 1 : 59));
};

const handlePressInMints = () => {
  const timeout = window.setTimeout(() => {
    const interval = window.setInterval(() => {
      increaseMinutes();
    }, 150);
    setIncreaseTimeout(interval);
  }, delayDuration);
  setDelayTimeout(timeout);
};

const handlePressDesMints = () => {
  const timeout = window.setTimeout(() => {
    const interval = window.setInterval(() => {
      decreaseMinutes();
    }, 150);
    setIncreaseTimeout(interval);
  }, delayDuration);
  setDelayTimeout(timeout);
};

const handlePressOutMints = () => {
  if (delayTimeout) {
    window.clearTimeout(delayTimeout);
    setDelayTimeout(null);
  }
  if (increaseTimeout) {
    window.clearInterval(increaseTimeout);
    setIncreaseTimeout(null);
  }
};

  
    return (
        <S.Mints>
          <S.ViewOpUp onPressIn={handlePressDesMints} onPress={decreaseMinutes} onPressOut={handlePressOutMints}>     
              <S.ButtonUp          
              source={require('../../img/less.png')}
              />
          </S.ViewOpUp>

          <S.ViewText >
            <S.NumberText>{String(minutes).padStart(2, '0')}</S.NumberText>
          </S.ViewText>

          <S.ViewOpDo onPressIn={handlePressInMints} onPress={increaseMinutes} onPressOut={handlePressOutMints} >     
              <S.ButtonDown 
              source={require('../../img/plus.png')}
              />
          </S.ViewOpDo>
        </S.Mints>
    );
  };





