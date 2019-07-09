import React from 'react';
import Header from './common/header';
import { BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import {GlobalStyle} from './style.js';
import Write from './pages/write';
import ScrollToTop from './scrollTop/ScrollToTop';

function App() {
  return (
    <React.Fragment>
    <GlobalStyle  />
    <BrowserRouter>

      <ScrollToTop>
      <Header />
      <Route path = '/' exact component = {Home}></Route>
      <Route path = '/login' exact component = {Login}></Route>
      <Route path = '/detail/:id' exact component = {Detail}></Route>
      <Route path ='/write' exact component ={Write}></Route>
      </ScrollToTop>
    </BrowserRouter>
    </React.Fragment>
    
  );
}

export default App;
