import React, { Component } from 'react';
import './QuoteForm.css';

const MAX_LENGTH = 30;

class QuoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = { character: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    event.target.value.length <= MAX_LENGTH &&
      this.setState({ character: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <form className='QuoteForm'>
        <label htmlFor='character'>Character:</label>
        <input
          id='character'
          className={
            this.state.character.length < MAX_LENGTH
              ? 'length-ok'
              : 'length-maximum-reached'
          }
          value={this.state.character}
          name='character'
          type='text'
          onChange={this.handleChange}
        />
        <p>Remaining characters : {MAX_LENGTH - this.state.character.length}</p>
      </form>
    );
  }
}

export default QuoteForm;
