import React, { useState } from 'react';
import * as S from "./style";

const Timer = ({ maxCount, onCountChange, people }) => {

  const [count,setCount] = useState(0)

  const increaseCount = () => {
    if (maxCount < 50) {
      setCount(count + 1);
      onCountChange('increase'); 
    }
  };
  
  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
      onCountChange('decrease'); 
    }
  };
  

  return (
    <S.Mints>
      <S.ViewOpUp onPress={decreaseCount}>
        <S.ButtonUp source={require('../../img/less.png')} />
      </S.ViewOpUp>
      <S.ViewText>
        <S.NumberText>{String(count).padStart(2, '0')}</S.NumberText>
      </S.ViewText>
      <S.ViewOpDo onPress={increaseCount}>
        <S.ButtonDown source={require('../../img/plus.png')} />
      </S.ViewOpDo>
    </S.Mints>
  );
};

export default Timer;
