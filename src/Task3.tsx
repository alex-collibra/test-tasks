import { useState } from 'react';

interface Task3Props {
  // Update this interface
  renderItem: any;
  item: any;
}
// Task3 component receives renderItem and item function
// item can be of any object type
// But renderItem is always a function like this
// (item, internalState) => ...
// If we check App.tsx -> <Task3 /> usage
// we'll see that renderItem is of type any and item
// is of type any as well
// Try to write props interface for this component to fix this
//
export function Task3({ renderItem, item }: Task3Props) {
  const [internalState] = useState('Some data');

  return <>{renderItem(item, internalState)}</>;
}
