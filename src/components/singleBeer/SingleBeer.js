import React, { Component } from 'react';
import './SingleBeer.css';
import Header from '../header/Header';
import axios from 'axios';

class SingleBeer extends Component {
  state = {
    theBeer: {},
  };

  async componentDidMount() {
    const beerId = this.props.match.params.id;
    const responseFromTheAPI = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
    );
    // console.log(responseFromTheAPI.data);
    this.setState({
      theBeer: responseFromTheAPI.data,
    });
  }

  render() {
    // console.log(this.props);
    // const beerId = this.props.match.params.id;
    // const beers = this.props.beers;
    // const theBeer = beers.find((eachBeer) => eachBeer._id === beerId);
    // console.log(theBeer);
    // if (!theBeer) return null;
    const theBeer = this.state.theBeer;
    return (
      <>
        <Header />
        <div className="single-beer" key={theBeer._id}>
          <img src={theBeer.image_url} alt={theBeer.name} />
          <div>
            <div className="top">
              <h2>{theBeer.name}</h2>
              <h2>
                <span>{theBeer.attenuation_level}</span>
              </h2>
            </div>
            <div className="bottom">
              <h4>
                <span>{theBeer.tagline}</span>
              </h4>
              <h4>{theBeer.first_brewed}</h4>
            </div>
            <div className="text">
              <p>
                <strong>{theBeer.description}</strong>
              </p>
              <h5>{theBeer.contributed_by}</h5>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SingleBeer;
