import { Component } from 'react';
import './App.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import QuoteCard from './components/QuoteCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      simpson: null,
    };
    this.randomQuote = this.randomQuote.bind(this);
  }

  randomQuote() {
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes').then((res) => {
      const simpson = res.data[0];
      this.setState({
        simpson,
      });
    });
  }

  componentDidMount() {
    this.randomQuote();
  }

  render() {
    return (
      <div className='App'>
        <h1>The Simpsons Quotes Generator</h1>
        <button className='myButton' type='button' onClick={this.randomQuote}>
          Randomize
        </button>
        {this.state.simpson ? (
          <QuoteCard simpson={this.state.simpson} />
        ) : (
          <div>
            <FontAwesomeIcon icon={faSpinner} spin /> Loading...
          </div>
        )}
      </div>
    );
  }
}

export default App;
