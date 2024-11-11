import { Component } from 'react';
import './index.css';

class CoinToss extends Component {
  state = {
    coinImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    total: 0,
    heads: 0,
    tails: 0,
  };

  onTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2);
    if (tossResult === 0) {
      this.setState(prevState => ({
        coinImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
        total: prevState.total + 1,
        heads: prevState.heads + 1,
      }));
    } else {
      this.setState(prevState => ({
        coinImage: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
        total: prevState.total + 1,
        tails: prevState.tails + 1,
      }));
    }
  };

  render() {
    const { coinImage, total, heads, tails } = this.state;

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="message">Heads (or) Tails</p>
          <img src={coinImage} alt="toss result" className="img" />
          <button className="btn" onClick={this.onTossCoin}>Toss Coin</button>
          <div className="counts-container">
            <p className="count">Total: {total}</p>
            <p className="count">Heads: {heads}</p>
            <p className="count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CoinToss;
