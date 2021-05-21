import React, { Component } from 'react';
import './AllTheBeers.css';
import { Link } from 'react-router-dom';

class AllTheBeers extends Component {
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
    return beersToRender;
  }
}

export default AllTheBeers;
