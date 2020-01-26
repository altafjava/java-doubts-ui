import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://altafjava.blogspot.com" className="navbar-brand">AltafJava</a></div>
                    <ul className="navbar-nav">
                        <li className="nav-link">Home</li>
                        <li className="nav-link">Todos</li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li className="nav-link">Login</li>
                        <li className="nav-link">Logout</li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header