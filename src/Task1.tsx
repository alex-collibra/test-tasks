import { useEffect, useState } from 'react';

// Implement useEffect to watch for changes in param
// each time when param changes increment counter
export function Task1() {
  const [counter, setCounter] = useState(0);
  const [param, setParam] = useState('test-param');

  useEffect(
    () => {
      // !!! DO NOT UNCOMMENT BELOW LINE.
      // It will cause an infinite loop
      // setCounter(counter + 1);
    },
    [
      // !!! DO NOT UNCOMMENT BELOW LINE.
      // It will cause an infinite loop
      /* counter */
    ]
  );

  return (
    <div>
      <h1>State updates</h1>
      <p>{counter}</p>

      <button
        onClick={() => {
          setParam(faker.string.uuid());
        }}
      >
        Update url param
      </button>
    </div>
  );
}
