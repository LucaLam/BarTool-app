import React, { Component } from 'react'
import StatRating from './StarRating'
import './result.scss'
import axios from 'axios';

export class Result extends Component {

    //converts cl (integer) to ounces
    convertToOunces=(num)=>{
        if(num){
        let ounces = Math.round(num /3 * 100) / 100;
        return ounces;} else{
            return;
        }
    };

    //converts 'cl' (units the data uses) to 'oz' (common unit)
    convertUnit = (value)=>{
        if(value){
            return 'oz';
        }
    };

    //add a drink to the saved page
    handleAdd = () =>{
    const newSavedDrinks = {
    drink: this.props.recipe.drink,
    ingredients: this.props.recipe.ingredients,
    preparation: this.props.recipe.preparation,
    garnish: this.props.recipe.garnish,
        }
        //using local storage to access the user first, then the needed array of saved drinks
        axios.post(`http://localhost:8080/user/${localStorage.getItem('user')}/savedDrink`, newSavedDrinks)
        .then(response => {
        console.log(response);
        })
    }
    
    render() {
        console.log(this.props);
        let ingredient = this.props.recipe.ingredients.map(item => {
                return(
                    <>
                        {item.amount || item.unit || item.ingredient ? <li className='result__ingredient-item'>{this.convertToOunces(item.amount)} {this.convertUnit(item.unit)} {item.ingredient}</li> : null }
                        { item.special ? <li className='result__ingredient-item'>{item.special}</li> : null }
                    </>
                    )
            })
        return (
            <div className='result'>
                <button className='result__close-btn' onClick={this.props.closeSearch}>x</button>
                <h2 className='result__title'>{this.props.recipe.drink}</h2>
                <ul className='result__ingredient-list'>
                {ingredient}
                </ul>
                <p className='result__prep'>{this.props.recipe.preparation}</p>
                <p className='result__garnish'>Garnish: {this.props.recipe.garnish}</p>
                <div className='result__rating-add-btn-container'>
                <StatRating />
                <div onClick={this.handleAdd} className='result__add-btn'>Save</div>
                </div>
            </div>
            
        )
}

}

export default Result
