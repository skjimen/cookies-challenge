// import logo from './logo.svg';
// import './App.css'

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinkArray: [],
      favorites: [],
      search: ""
    };
    this.addToFavorites = this.addToFavorites.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:3001/")
      .then(res => res.json())
      .then(drinkData => {
        this.setState({ drinkArray: drinkData.drinks });
      });
  }

  addToFavorites(drink) {
    this.setState(prevState => ({
      favorites: [...prevState.favorites, drink]
    }));
  }

  render() {
    const drinkArrayVar = this.state.drinkArray.map((element, index) => (
      <li key={index}>
        {element.strDrink}
        <button onClick={() => this.addToFavorites(element)}>Add to Favorites</button>
      </li>
    ));

    const favoritesArrayVar = this.state.favorites.map((element, index) => (
      <li key={index}>{element.strDrink}</li>
    ));

    return (
      <div className="App">
        <h1>Cocktails</h1>
        <ul>{drinkArrayVar}</ul>
        <h2>Favorites</h2>
        <ul>{favoritesArrayVar}</ul>
      </div>
    );
  }
}

export default App;
