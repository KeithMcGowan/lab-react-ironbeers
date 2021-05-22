import axios from 'axios';
import React, { Component } from 'react';
import '../singleBeer/SingleBeer.css';
import Header from '../header/Header';

class RandomBeer extends Component {
  state = {
    randomBeer: [],
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((responseFromAPI) => {
        this.setState({
          randomBeer: responseFromAPI.data,
        });
      });
  }

  render() {
    const randomBeer = this.state.randomBeer;
    return (
      <>
        <Header />
        <div className="random-beer" key={randomBeer._id}>
          <img src={randomBeer.image_url} alt={randomBeer.name} />
          <div>
            <div className="top">
              <h2>{randomBeer.name}</h2>
              <h2>
                <span>{randomBeer.attenuation_level}</span>
              </h2>
            </div>
            <div className="bottom">
              <h4>
                <span>{randomBeer.tagline}</span>
              </h4>
              <h4>{randomBeer.first_brewed}</h4>
            </div>
            <div className="text">
              <p>
                <strong>{randomBeer.description}</strong>
              </p>
              <h5>{randomBeer.contributed_by}</h5>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RandomBeer;
