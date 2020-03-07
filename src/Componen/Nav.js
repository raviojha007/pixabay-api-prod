import React, { Component } from 'react';
import './Nav.css'
//import { withRouter } from "react-router-dom";

export class Nav extends Component {
    SignOut=()=>{
        this.props.history.push('/')
    }
    render() {
        return (
            <div className=" Nav">

             <nav className="navbar navbar-expand-lg navbar-light bg-dark">
         <div className="container "> 
                <a className="navbar-brand text-white ml-5 "  href="#">PixaBay Images</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-5 ">
                    <li className="nav-item dropdown">
                        
                    </li>
                    </ul>
                </div>
        </div>    
                </nav>
   
 </div>
        );
    }
}

export default  Nav;
