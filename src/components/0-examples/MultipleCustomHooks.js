import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../01-useState/counter.css';

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);
  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { author, quote } = !!data && data[0];
  
  return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      <hr/>

      {
        loading
        ? 
          (
            <div className="alert alert-info text-center">
            Loading...
            </div>
          )
        :
          (
            <blockquote className="blockquote text-end">
              <p> {quote} </p>
              <footer className="blockquote-footer"> {author} </footer>
            </blockquote>
          )
      }

      {
        (counter > 1) &&
        (
          <button 
            className="btn btn-primary me-2"
            onClick={() => decrement()}
          >
            Previous
          </button>
        )
      }

      <button 
        className="btn btn-primary"
        onClick={() => increment()}
      >
        Next
      </button>
    </div>
  )
}
