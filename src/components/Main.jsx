import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import MiddleColumn from '../layout/MiddleColumn'
import LeftColumn from '../layout/LeftColumn'
import RightColumn from '../layout/RightColumn'
import Header from '../layout/Header'
import Footer from '../layout/Footer'


class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2">
                            <LeftColumn />
                        </div>
                        <div className="col-sm-8">
                            <MiddleColumn />
                        </div>
                        <div className="col-sm-2">
                            <RightColumn />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Main