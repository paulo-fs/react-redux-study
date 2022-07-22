import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const selector = useSelector(state => state.counter);
  const { counter, showCounter } = selector
  const dispatch = useDispatch();

  function incrementHandler(){
    dispatch(counterActions.increment());
  }

  function decrementHandler(){
    dispatch(counterActions.decrement());
  }

  function increaseHandler(){
    dispatch(counterActions.increase(5));
  }

  function toggleCounter(){
    dispatch(counterActions.toggleCounter());
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
