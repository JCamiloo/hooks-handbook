import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';
import '../01-useState/counter.css';

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
