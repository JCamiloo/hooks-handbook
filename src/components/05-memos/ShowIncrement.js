import React from 'react';

export const ShowIncrement = React.memo(({increment}) => {
  console.log('generatad again');
  return (
    <button
      className="btn btn-primary"
      onClick={increment}
    >
      Increase
    </button>
  )
});
