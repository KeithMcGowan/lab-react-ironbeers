import React, { Component } from 'react';
import './App.css';
import Home from './components/home/Home';
import { Switch, Route } from 'react-router-dom';
import AllTheBeers from './components/allTheBeers/AllTheBeers';
import RandomBeer from './components/randomBeer/RandomBeer';
import NewBeer from './components/NewBeer/NewBeer';
import axios from 'axios';
import SingleBeer from './components/singleBeer/SingleBeer';

class App extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        this.setState({
          beers: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleBeerChange = (beers) => {
    this.setState({
      beers,
    });
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/beers"
            render={(props) => (
              <AllTheBeers
                {...props}
                beers={this.state.beers}
                handleBeerChange={this.handleBeerChange}
              />
            )}
          />
          <Route
            exact
            path="/beers/:id"
            render={(props) => (
              <SingleBeer {...props} beers={this.state.beers} />
            )}
          />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
