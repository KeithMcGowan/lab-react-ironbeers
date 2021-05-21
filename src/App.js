import React, { Component } from 'react';
import './App.css';
import Home from './components/home/Home';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
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
        this.setState({ beers: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
  
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/beers" render={() => <AllTheBeers beers={this.state.beers} />} />
            <Route exact path="/beers/:id" render={(props) => <SingleBeer {...props} beers={this.state.beers} />} />
            <Route exact path="/random-beer" component={RandomBeer} />
            <Route exact path="/new-beer" component={NewBeer} />
          </Switch>
      </div>
    );
  }
}

export default App;
