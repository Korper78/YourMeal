import { useState } from 'react';
import style from './Count.module.css';

export const Count = (props) => {
  const [count, setCount] = useState(props.count);

  const addCount = () => {
    setCount(count + 1);
  };

  const removeCount = () => {
    setCount(count > 1? count - 1 : count);
  };

  return (
    <div className={style.count}>
      <button className={style.minus} onClick={removeCount}>-</button>
      <p className={style.amount}>{count}</p>
      <button className={style.plus} onClick={addCount}>+</button>
    </div>
  )
}