import React, { Component } from "react";
import Header from "./Header";
import './search.scss';
import searchIcon from '../assets/magnifying-glass.svg';
import Result from './Result';
import axios from "axios";
import Logo from './Logo';
import addIcon from '../assets/add.svg';
import Form from "./Form";
import Modal from 'react-responsive-modal';

export class Search extends Component {
state = {
    drink: "",
    ingredients: [], // was an array inside an array
    preparation: '',
    garnish: '',
    isShowing: false,
    addFormOpen: false,

    open: false
};

//for popup
onOpenModal = () => {
    this.setState({ open: true });
};

onCloseModal = () => {
    this.setState({ open: false });
};
//pop-up ends

//handles the search request for a drink. 
handleSubmit = event => {
    event.preventDefault();
    if (!this.state.drink) {
    this.onOpenModal();
    } else {
    axios.get("http://localhost:8080/recipes").then(response => {
        //toLowerCase allows the search bar to NOT be case sensitive
        let drink = response.data.find(drink => drink.name.toLowerCase() === this.state.drink.toLowerCase())
        if(!drink){
            this.onOpenModal();
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

//captures the input field 
handleChange = event => {
    let drink = event.target.value
    this.setState({
    drink: drink
    });
};

//opens returned drink
closeSearch = event => {
    this.setState({
        isShowing: false,
        drink: ''
    })
};

//opens form field in order to add a new drink to the main repo
addHandler = event => {
    this.setState({
        addFormOpen: !this.state.addFormOpen
    })
    
}
render() {
    const { open } = this.state;
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
        <Form /> : null
        }

        {/* //pop-up */}
        <div className='pop-up'>
        <Modal open={open} onClose={this.onCloseModal}>
        <h3 className='pop-up__message'>Drink Name Not Found!</h3>
        </Modal>
        </div>
      {/* //pop-up */}



    </div>
    );
}
}

export default Search;
