import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const selector = useSelector(state => state);
  const { counter, showCounter } = selector
  const dispatch = useDispatch();

  function incrementHandler(){
    dispatch({ type: 'INCREMENT' });
  }

  function decrementHandler(){
    dispatch({ type: 'DECREMENT' });
  }

  function increaseHandler(){
    dispatch({ type: 'INCREASE', amount: 5 })
  }

  function toggleCounter(){
    dispatch({ type: 'TOGGLE' })
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { showCounter && <div className={classes.value}>{counter}</div> }
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Incriase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounter}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
