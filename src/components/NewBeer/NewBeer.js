import axios from 'axios';
import React, { Component } from 'react';
import './NewBeer.css';
import Header from '../header/Header';

class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  };

  changeHandler = (e) => {
    console.log(this.state);
    // grab the name the input field
    const name = e.target.name;
    // grab value from component
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
      .then((_) => {
        this.props.history.push('/beers');
      });
  };

  render() {
    //   console.log(this.props);
    return (
      <>
        <Header />
        <div className="new-beer">
          <form onSubmit={this.submitHandler} className="beer-form">
            <label htmlFor="name">
              <b>Name</b>
            </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.changeHandler}
            />

            <label htmlFor="tagline">
              <b>Tagline</b>
            </label>
            <input
              type="text"
              name="tagline"
              value={this.state.tagline}
              onChange={this.changeHandler}
            />

            <label htmlFor="description">
              <b>Description</b>
            </label>
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.changeHandler}
              style={{ height: '25vh' }}
            />

            <label htmlFor="first_brewed">
              <b>First Brewed</b>
            </label>
            <input
              type="text"
              name="first_brewed"
              value={this.state.first_brewed}
              onChange={this.changeHandler}
            />

            <label htmlFor="brewers_tips">
              <b>Brewers Tips</b>
            </label>
            <input
              type="text"
              name="brewers_tips"
              value={this.state.brewers_tips}
              onChange={this.changeHandler}
            />

            <label htmlFor="attenuation_level">
              <b>Attenuation Level</b>
            </label>
            <input
              type="number"
              name="attenuation_level"
              value={this.state.attenuation_level}
              onChange={this.changeHandler}
            />

            <label htmlFor="contributed_by">
              <b>Contributed By</b>
            </label>
            <input
              type="text"
              name="contributed_by"
              value={this.state.contributed_by}
              onChange={this.changeHandler}
            />
            <button type="submit">CREATE NEW BEER!</button>
          </form>
        </div>
      </>
    );
  }
}

export default NewBeer;
