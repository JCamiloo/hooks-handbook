import { useEffect, useState } from 'react';

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMoveEvent = (e) => {
     setCoords({ x: e.x, y: e.y });
    }

    new Promise()

    window.addEventListener('mousemove', mouseMoveEvent);

    return () => {
      window.removeEventListener('mousemove', mouseMoveEvent);
    }
  }, []);

  return (
    <p>
      x: {coords.x}, y: {coords.y}
    </p>
  )
}
