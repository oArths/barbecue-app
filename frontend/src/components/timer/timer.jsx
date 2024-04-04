import React, { useState } from 'react';
import * as S from "./style";

const Timer = ({ maxCount, onCountChange }) => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    if (count < maxCount) {
      const newCount = count + 1;
      setCount(newCount);
      onCountChange(newCount, 'increase'); 
    }
  };
  
  const decreaseCount = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      onCountChange(newCount, 'decrease'); 
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
