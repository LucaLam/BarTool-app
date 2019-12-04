import React, { Component } from "react";
import Header from "./Header";
import './search.scss';
import searchIcon from '../assets/magnifying-glass.svg';
import Result from './Result';
import axios from "axios";
import Logo from './Logo';
import addIcon from '../assets/add.svg';
import Modal from "./Modal";



export class Search extends Component {
state = {
    drink: "",
    ingredients: [], // was an array inside an array
    preparation: '',
    garnish: '',
    isShowing: false,
    addFormOpen: false
};

handleSubmit = event => {
    event.preventDefault();
    if (!this.state.drink) {
    alert("Please Enter a Drink Name.");
    } else {
    axios.get("http://localhost:8080/recipes").then(response => {
        let drink = response.data.find(drink => drink.name === this.state.drink)
        if(!drink){
            alert('Drink Not Found!')
        } else{
            this.setState({
                drink: drink.name,
                //Flat makes a nested array into one array
                ingredients: drink.ingredients.flat(1),
                preparation: drink.preparation,
                garnish: drink.garnish,
                isShowing: true
            })
        }
    });
    }
};

handleChange = event => {
    this.setState({
    drink: event.target.value
    });
};

//opens returned drink
closeSearch = event => {
    this.setState({
        isShowing: false,
        drink: ''
    })
};

//to add a new drink to the main repo
addHandler = event => {
    this.setState({
        addFormOpen: !this.state.addFormOpen
    })
    
}


render() {
    return (
    <div className='search'>
        <Header />
        <h2 className='search__welcome-title'>Welcome, {localStorage.getItem('user', this.props.user)}</h2>
        <div className='search__test'>
        <form onSubmit={this.handleSubmit} className='search__form'>
        <input
            placeholder="Search"
            name="drinkName"
            value={this.state.drink}
            onChange={this.handleChange}
            className='search__form-field'
        ></input>
        <button className='search__form-btn'>
            <img className='search__search-icon' src={searchIcon} alt='' />
        </button>
        </form>
        {
        this.state.isShowing ? <Result 
        recipe={this.state} 
        closeSearch={this.closeSearch} 

        /> : null 
        }
        </div>
        <Logo />
        <span className='add-btn' onClick={this.addHandler}>
        <img className='add-icon' src={addIcon} alt='' />
        </span> 
        { this.state.addFormOpen ? 
        <Modal /> : null
        }
    </div>
    );
}
}

export default Search;
