import { useState } from 'react';

export const useCounter = (initialState = 0) => {
  const [state, setState] = useState(initialState);

  const increment = (value = 1) => {
    setState(state + value);
  }

  const decrement = (value = 1) => {
    setState(state - value);
  }

  const reset = () => {
    setState(initialState);
  }
  
  return {
    state,
    increment,
    decrement,
    reset
  }
}
