import React, { Component } from 'react';
import './AllTheBeers.css';
import { Link } from 'react-router-dom';
import Header from '../header/Header';
import axios from 'axios';

class AllTheBeers extends Component {
  searchBeers = (e) => {
    const query = e.target.value;
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
      .then((responseFromAPI) => {
        // console.log(responseFromAPI);
        this.props.handleBeerChange(responseFromAPI.data);
      });
  };

  render() {
    const beersToRender = this.props.beers.map((beerData) => (
      <div className="all-the-beers" key={beerData._id}>
        <Link to={`/beers/${beerData._id}`}>
          <img src={beerData.image_url} alt={`${beerData.name}`} />
          <div className="beer-details">
            <h3>{beerData.name}</h3>
            <h4>{beerData.tagline}</h4>
            <p>
              <strong>Created by: </strong> {beerData.contributed_by}
            </p>
          </div>
        </Link>
      </div>
    ));
    return (
      <div>
        <Header />
        <input type="text" placeholder="Search" onChange={this.searchBeers} />
        {beersToRender}
      </div>
    );
  }
}

export default AllTheBeers;
