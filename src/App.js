import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {
  Container,
} from 'semantic-ui-react';
import MoviesPage from './components/pages/MoviesPage';
import Footer from './components/Footer';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/pages/HomePage';
import NewMoviePage from './components/pages/NewMoviePage';



class App extends Component {


  render() {

    const containerCustomStyle = {
      maxWidth : '1110px !important'
    }

    return (
      <div className="App">
        <Header/>
        <Container style = {containerCustomStyle}>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/movies' component={MoviesPage}></Route>
          <Route path='/movies/new' component={NewMoviePage}></Route>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
