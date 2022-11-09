import React, { Component } from "react";

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(){
        this.setState({ menu: !this.state.menu })  
    }

    render() {

        const show = (this.state.menu) ? "show" : "" ;

        return (

            <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top">
                <button className="navbar-toggler" style={{marginLeft : 10}} type="button" onClick={ this.toggleMenu }>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={"collapse justify-content-center navbar-collapse " + show}>
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="/">Features</a>
                        <a className="nav-item nav-link" href="/">Pricing</a>
                    </div>
                </div>
            </nav>  

        );  
    }
}