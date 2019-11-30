import React, { Component } from 'react'
import StatRating from './StarRating'

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
                        <li>{this.convertToOunces(item.amount)} 
                        {this.convertUnit(item.unit)} 
                        {item.ingredient}</li>
                    </>
                    )
            })
        return (
            <div>
                <button onClick={this.props.closeSearch}>X</button>
                <h1>{this.props.recipe.drink}</h1>
                <ul>
                {ingredient}
                </ul>
                <p>{this.props.recipe.preparation}</p>
                <p>Garnish: {this.props.recipe.garnish}</p>
                <StatRating />
                <div onClick={this.addHandler}>+</div>
            </div>
            
        )
}

}

export default Result
