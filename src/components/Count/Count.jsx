import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, removeProduct } from '../../store/order/orderSlice';
import style from './Count.module.css';

export const Count = ({count, id}) => {
  const dispatch = useDispatch();
  // const [count, setCount] = useState(count);

  const addCount = () => {
    // setCount(count + 1);
    dispatch(addProduct({id}));
  };

  const removeCount = () => {
    // setCount(count > 1? count - 1 : count);
    dispatch(removeProduct({id}));
  };

  return (
    <div className={style.count}>
      <button className={style.minus} onClick={removeCount}>-</button>
      <p className={style.amount}>{count}</p>
      <button className={style.plus} onClick={addCount}>+</button>
    </div>
  )
}