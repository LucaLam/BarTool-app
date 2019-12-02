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
            let saved = response.data.filter(user => user.name === localStorage.getItem('user'));
            saved.map(item => {
                this.setState({
                    saved: item.savedDrinks
                })
                
            })
        }
        )}
    render() {
    let savedDrinkList = this.state.saved.map(item => {
            return(
                <>
                <h2>{item.name}</h2>
                <ul>
                {
                    item.ingredients.map(item => {
                        return(
                            <li>{item.amount} {item.unit} {item.ingredient}</li>
                        )
                    })
                }
                </ul>
                <p>{item.preparation}</p>
                <p>{item.garnish}</p>
                </>
            )
        })
        return (
            <div>
                <Header />
                {savedDrinkList}
                <Logo />
            </div>
        )
        }
}


export default SavedPage
