import { useEffect, useState } from 'react';
import { Message } from './Message';
import '../01-useState/counter.css';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: ''
  });

  const { name, email } = formState;

  useEffect(() => {
    console.log('formState changed')
  }, [formState]);

  const handleInputChange = ({target}) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    });
  }

  return (
    <>
      <h1>useEffect</h1>
      <hr/>

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group mt-2">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="email@gmail.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      { name && <Message/>}
    </>
  )
}
