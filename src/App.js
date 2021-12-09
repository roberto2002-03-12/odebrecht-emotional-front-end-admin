import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListProfessionalComponent from './components/ListProfessionalComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateProfessionalComponent from './components/CreateProfessionalComponent';
import ViewProfessionalComponent from './components/ViewProfessionalComponent';
import UpdateProfessionalComponent from './components/UpdateProfessionalComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListProfessionalComponent}></Route>
                          <Route path = "/professional" component = {ListProfessionalComponent}></Route>
                          <Route path = "/add-professionals/" component = {CreateProfessionalComponent}></Route>
                          <Route path = "/view-professionals/:id" component = {ViewProfessionalComponent}></Route>
                          <Route path = "/update-professional/:id" component = {UpdateProfessionalComponent}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
