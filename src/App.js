import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

const todo = [
  {
    name: 'Review Vue.js',
    id: 1,
    done: false
  },
  {
    name: 'Finish portfolio',
    id: 2,
    done: false
  },
  {
    name: 'Get groceries',
    id: 3,
    done: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: todo
    };
  }

  toggleThing = id => {
    const newTodoList = this.state.todoList.map(thing => {
      if (thing.id === id) {
        return {
          ...thing,
          done: !thing.done
        };
      } else {
        return thing;
      }
    });
    this.setState({
      todoList: newTodoList
    });
  };

  addThing = thingName => {
    const newThing = {
      name: thingName,
      id: Date.now(),
      done: false
    };
    this.setState({
      todoList: [...this.state.todoList, newThing]
    });
  };

  clearThing = e => {
    e.preventDefault();
    let done = this.state.todoList.slice();
    done = done.filter(thing => !thing.done);
    this.setState({ todoList: done });
  };

  render() {
    return (
      <div>
        <TodoList todo={this.state.todoList} toggleThing={this.toggleThing} />
        <h2>Todo List: MVP</h2>
        <TodoForm addThing={this.addThing} clearThing={this.clearThing} />
      </div>
    );
  }
}

export default App;
