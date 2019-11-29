import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";

export class Search extends Component {
state = {
    drink: ""
};

handleSubmit = event => {
    event.preventDefault();
    if (!this.state.drink) {
    alert("Please Enter a Drink Name.");
    } else {
    axios.get("http://localhost:8080/recipes").then(response => {
        let drink = response.data.find(drink => drink.name === this.state.drink)
        console.log(drink)
        if(!drink){
            alert('Drink Not Found!')
        } else{
            // this.setState({
            //     drink: drink.name,
            //     ingredients: [drink.ingredients],
            //     preparation: drink.preparation,
            //     garnish: drink.garnish
            // })
        }
    });
    }
};

handleChange = event => {
    this.setState({
    drink: event.target.value
    });
};

render() {
    console.log('drink is', this.state)
    return (
    <div>
        <Header />
        <form onSubmit={this.handleSubmit}>
        <input
            placeholder="Search"
            name="drinkName"
            value={this.state.drink}
            onChange={this.handleChange}
        ></input>
        <button>Drink!</button>
        </form>
    </div>
    );
}
}

export default Search;
