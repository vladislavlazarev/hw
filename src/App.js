import React, { Component } from 'react';
import { Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage"
import Navbar from './components/Navbar/Navbar';
import HeroList from "./components/HeroList/HeroList";
import Form from "./components/Form/Form"
import Modal from './components/Modal/Modal'
class App extends Component {
  constructor(){
    super();
    this.state = {
      appName: "[K]niga",
      modalOpen: false,
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
  openModal() {
    this.setState({modalOpen: true});
  }
  closeModal() {
    this.setState({modalOpen: false});
  }
  render() {
    const { modalOpen } = this.state;
    return (
        <>
      <Navbar appName={this.state.appName}/>
      {/*<HeroList heroes={this.state.heroes}/>*/}
      <Route exact path="/"
             render={(props) => <HomePage/> }/>
      <Route path="/HeroList"
               render={(props) => <HeroList heroes={this.state.heroes}/>}/>
      <Route path="/Modal"
               render={(props) => <Modal/>}/>
      <Route path="/Form"
             render={(props) => <Form
             />}/>



          <div>
            <button
              className="btn btn-md btn-primary"
              onClick={this.openModal.bind(this)}
            >Open Modal</button>

            {/* Only show Modal when "this.state.modalOpen === true" */}
            {modalOpen
              ? <Modal closeModal={this.closeModal.bind(this)} />
              : ''}
          </div>
      </>
    );
  }
}

export default App;
