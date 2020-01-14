import React from 'react';

const Todo = props => {
  return (
    <div
      className={`thing${props.thing.done ? ` done` : ``}`}
      onClick={() => props.toggleThing(props.thing.id)}
    >
      <p>{props.thing.name}</p>
    </div>
  );
};

export default Todo;
