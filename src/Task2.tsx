import { useState } from 'react';
import {v4 as uuid } from 'uuid';

function createInitialTodos() {
  console.log('Expensive function');

  const initialTodos: { id: number; text: string }[] = [];
  for (let i = 0; i < 50; i++) {
    initialTodos.push({
      id: i,
      text: 'Item ' + (i + 1),
    });
  }
  return initialTodos;
}

const randomId =uuid();

// Currently createInitialTodos function is called on every rerender
// Press Unrelated state update to see it
// Add filering of todos
// Let's pretend todos list is very huge
// Try to optimize the filtering of todos
export function Task2() {
  const [todos] = useState(createInitialTodos());
  const [_rerender, setRerender] = useState(randomId);

  return (
    <div>
      <h1>Optimize Initial State Calculations</h1>

      <ul>
        {todos.map((item) => (
          // Is smth missing here?
          <li key={item.text}>{item.text}</li>
        ))}
      </ul>

      <button
        onClick={() => {
          setRerender(uuid());
        }}
      >
        Unrelated state update
      </button>
    </div>
  );
}
