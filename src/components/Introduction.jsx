import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css'
import Button from './Button';

class Introduction extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <Button />
                    <p>TEst const</p> 
                    <p>TEst const</p>
                    <p>TEst const</p>
                    <p>TEst const</p> 
                    <p>TEst const</p>
                    <p>TEst const</p>
                    <p>TEst const</p> 
                    <p>TEst const</p>
                    <p>TEst const</p>
                    <p>TEst const</p> 
                    <p>TEst const</p>
                    <p>TEst const</p>
                </header>
            </div>
        );
    }
}

export default Introduction;