import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
  }

  handleChanges = e => {
    this.setState({
      thingText: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addThing(this.state.thingText);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='thing'
          value={this.state.thingText}
          onChange={this.handleChanges}
          placeholder='Type Here...'
        />
        <button>Add</button>
        <button onClick={this.props.clearThing}>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
