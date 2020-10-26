import { Component } from 'react';
import './App.css';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      simpson: [],
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    axios
      .get('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          simpson: data[0],
        });
      });
  }

  render() {
    return (
      <div className='App'>
        <h1>The Simpsons Quotes Generator</h1>
        <button
          className='myButton'
          type='button'
          onClick={this.componentDidMount}>
          Randomize
        </button>
        <QuoteCard simpson={this.state.simpson} />
      </div>
    );
  }
}

export default App;
