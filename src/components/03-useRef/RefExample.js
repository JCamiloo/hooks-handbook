import { useState } from 'react';
import { MultipleCustomHooks } from '../0-examples/MultipleCustomHooks';

export const RefExample = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Ref Example</h1>
      <hr/>

      { show && <MultipleCustomHooks/> }

      <button
        className="btn btn-primary mt-5"
        onClick={() => {
          setShow(!show);
        }}
      >
        { show ? 'Hide' : 'Show' }
      </button>
    </div>
  )
}
