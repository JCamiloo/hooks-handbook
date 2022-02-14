import { useCallback, useState } from 'react';
import '../01-useState/counter.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);
  const increment = useCallback(() => {
    setCounter(counter => counter + 1);
  }, [setCounter]);

  return (
    <div>
      <h1>useCallback Hook: {counter}</h1>
      <hr/>
      <ShowIncrement increment={increment}/>
    </div>
  )
}
