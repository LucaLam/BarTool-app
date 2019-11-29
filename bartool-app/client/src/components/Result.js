import React, { Component } from 'react'

export class Result extends Component {
    
    
    render() {
        let ingredient = this.props.recipe.ingredients.map(item => {
                return(
                    <>
                        <li>{item.amount} {item.unit} {item.ingredient}</li>
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
                <p>{this.props.recipe.garnish}</p>
            </div>
            
        )
}

}

export default Result
