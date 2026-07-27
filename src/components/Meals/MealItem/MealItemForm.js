import { useRef, useContext } from 'react';

import Input from '../../UI/Input';
import CartContext from '../../../store/cart-context';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {

  const amountInputRef = useRef();

  const cartCtx = useContext(CartContext);

  const submitHandler = (event) => {

    event.preventDefault();

    const enteredAmount = +amountInputRef.current.value;

    cartCtx.addItem({
      id: props.item.id,
      name: props.item.name,
      amount: enteredAmount,
      price: props.item.price
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;