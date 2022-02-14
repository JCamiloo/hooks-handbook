import { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';
import '../01-useState/counter.css';

export const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState();

  return (
    <div>
      <h1> 
        Counter: <Small value={counter}/>
      </h1>

      <button
        className="btn btn-primary"
        onClick={() => increment()}
      >
        +1
      </button>

      <button
        className="btn btn-outline-primary ms-3"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  )
}
