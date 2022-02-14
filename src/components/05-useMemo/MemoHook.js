import { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { heavyProcess } from '../../helpers/heavyProcess';
import '../01-useState/counter.css';

export const MemoHook = () => {
  const { counter, increment } = useCounter(2000);
  const [show, setShow] = useState(true);
  const memoProcess = useMemo(() => heavyProcess(counter), [counter]);

  return (
    <div>
      <h3> 
        Counter: <small>{ counter }</small>
      </h3>

      <hr/>

      <p> { memoProcess } </p>

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
