
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import classes from './CartItem.module.css';

const CartItem = ({item}) => {
  const { productName, quantity, totalPrice, price, id } = item;
  const dispatch = useDispatch();

  function removeItemHandler(){
    dispatch(cartActions.removeItemFromCart(id))
  }

  function addItemHandler(){
    dispatch(cartActions.addItemToCart(item))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{productName}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
