import React, { useState } from 'react';
import * as S from "./style";

const Timer = ({ maxCount, onCountChange, value, setValue }) => {

  const increaseCount = () => {
    if (maxCount < 50) {
      setValue(value + 1);
      onCountChange('increase'); 
    }
  };
  
  const decreaseCount = () => {
    if (value > 0) {
      setValue(value - 1);
      onCountChange('decrease'); 
    }
  };
  

  return (
    <S.Mints>
      <S.ViewOpUp onPress={decreaseCount}>
        <S.ButtonUp source={require('../../img/less.png')} />
      </S.ViewOpUp>
      <S.ViewText>
        <S.NumberText>{String(value).padStart(2, '0')}</S.NumberText>
      </S.ViewText>
      <S.ViewOpDo onPress={increaseCount}>
        <S.ButtonDown source={require('../../img/plus.png')} />
      </S.ViewOpDo>
    </S.Mints>
  );
};

export default Timer;
