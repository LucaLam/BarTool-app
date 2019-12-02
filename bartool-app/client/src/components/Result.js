import React, { Component } from 'react'
import StatRating from './StarRating'
import addIcon from '../assets/add.svg';
import './result.scss'

export class Result extends Component {

    convertToOunces=(num)=>{
        let ounces = num / 3;
        return ounces;
    };

    convertUnit = (value)=>{
        if(value){
            return 'oz';
        }
    };
    
    render() {
        let ingredient = this.props.recipe.ingredients.map(item => {
                return(
                    <>
                        <li className='result__ingredient-item'>{this.convertToOunces(item.amount)} {this.convertUnit(item.unit)} {item.ingredient}</li>
                        <li>{item.special}</li>
                    </>
                    )
            })
        return (
            <div className='result'>
                <button className='result__close-btn' onClick={this.props.closeSearch}>X</button>
                <h2 className='result__title'>{this.props.recipe.drink}</h2>
                <ul className='result__ingredient-list'>
                {ingredient}
                </ul>
                <p className='result__prep'>{this.props.recipe.preparation}</p>
                <p className='result__garnish'>Garnish: {this.props.recipe.garnish}</p>
                <StatRating />
                <span className='result__add-btn' onClick={this.addHandler}>
                <img className='result__add-icon' src={addIcon} alt='' />
                </span>
            </div>
            
        )
}

}

export default Result
