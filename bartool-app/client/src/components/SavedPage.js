import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios';
import Logo from './Logo';

export class SavedPage extends Component {
    state={
        saved:[]
    };

    componentDidMount(){
        axios.get("http://localhost:8080/user").then(response => {
            console.log(response.data)
            //use a while loop to state if the current user is logged in, always return the same array here.
        }
        )}

    render() {
        
    
        return (
            <div>
                <Header />
                <Logo />
            </div>
        )
        }
}


export default SavedPage
