import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeroList from "../HeroList/HeroList";
export default class Navbar extends Component{
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to={'/'}>{this.props.appName}</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <Link classname="nav-link" to={'/HeroList'}>Home</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}