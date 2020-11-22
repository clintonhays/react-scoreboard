import React, { Component } from 'react';

class AddPlayerForm extends Component {
  playerInput = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.playerInput.current.value);
    e.currentTarget.reset();
  };

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          /* prettier ignore */
          type="text"
          ref={this.playerInput}
          placeholder="Enter Player's Name"
        />
        <input type="submit" value="Add Player" />
      </form>
    );
  }
}

export default AddPlayerForm;
