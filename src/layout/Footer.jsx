import React, { Component } from "react";
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'

class Footer extends Component {
    render() {
        return (
            <Navbar sticky="bottom" style={{ backgroundColor: "#2b2b2a", marginTop: "50px"}}>
                <div class="container">
                    <div></div>
                    <div style={{color:"#d4d2d2"}}>
                        <div>All rights reserved 2019 @AltafJava</div>
                        <div className="footer-copyright text-center py-3">© 2020 Copyright <a href="#"> AltafJava</a></div>
                    </div>
                    <div></div>
                </div>
            </Navbar>
        )
    }
}

export default Footer