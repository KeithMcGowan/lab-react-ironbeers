import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>React IronBeers</h1>
        <div className="links">
          <Link to="/beers">
            <img src={'../../assets/beers.png'} alt="All the beers." />
            <h2>All of the Beers</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              commodi amet, obcaecati non nobis tempora similique temporibus
              optio voluptatem nihil pariatur. Ea fuga blanditiis quod?
            </p>
          </Link>
        </div>
        <div className="links">
          <Link to="/random-beer">
            <img src="../../assets/random-beer.png" alt="Random beer." />
            <h2>Random Beer</h2>
            <p>
              Excepturi ducimus velit minus, corporis mollitia in eaque dolorum
              non, sint quaerat sit est aut, magnam consectetur. Totam magni
              maxime, dicta recusandae nemo blanditiis iure.
            </p>
          </Link>
        </div>
        <div className="links">
          <Link to="/new-beer">
            <img src="../../assets/new-beer.png" alt="Add beer." />
            <h2>Add a New Beer</h2>
            <p>
              Praesentium magni itaque et voluptates! Corrupti maiores illo
              quisquam. Laboriosam, at magnam inventore delectus nihil excepturi
              dolores voluptatem reiciendis esse ab dolorum veniam rem
              doloribus?
            </p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
