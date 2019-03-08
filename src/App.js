import React, { Component } from 'react';
import { Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage"
import Navbar from './components/Navbar/Navbar';
import HeroList from "./components/HeroList/HeroList";
class App extends Component {
  constructor(){
    super();
    this.state = {
      appName: "[K]niga",
      heroes: [
        {
          name: 'Олег',
          img: 'https://vk.com/sticker/1-167-64-9-v1'
        },
        {
          name: 'Федор',
          img: 'https://vk.com/sticker/1-133-64-9'
        },
        {
          name: 'Клубника',
          img: 'https://vk.com/sticker/1-147-64-9'
        },
        {
          name: 'Лимон',
          img: 'https://vk.com/sticker/1-162-64-9-v1'
        },
        {
          name: 'Дима',
          img: 'https://vk.com/sticker/1-163-64-9'
        },
      ]
    }
  }

  render() {
    return (
        <>
      <Navbar appName={this.state.appName}/>
      {/*<HeroList heroes={this.state.heroes}/>*/}
      <Route exact path="/"
             render={(props) => <HomePage/> }/>
      <Route path="/HeroList"
               render={(props) => <HeroList heroes={this.state.heroes}/>}/>

      </>
    );
  }
}

export default App;
