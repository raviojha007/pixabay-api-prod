import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter as Router, Route, Link } from "react-router-dom";
import Nav from './Componen/Nav';
import Dashboard from './Componen/Dashboard'
import Image from './Componen/Image';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.


//import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';


function App(props) {
  console.log(props)
  return (
    <div className="">
       
   <Router>
   <Nav/>
        <Route exact path="/" component={Dashboard}></Route>
        <Route exact path="/MoviesList" component={Image}></Route>

   </Router>
      
     
      
    </div>
  );
}

export default App;
