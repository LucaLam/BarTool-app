import React, { Component } from 'react'
import axios from 'axios'
import './modal.scss'

export class Modal extends Component {

    state={
        name: '',
        ingredients: [],
        preparation: '',
        garnish: ''
    }

    submitHandler = (event) =>{
        const newDrinkSubmission = this.state
        // event.preventDefault();
        axios.post('http://localhost:8080/recipes', newDrinkSubmission)
        .then(response => {
            console.log(response);
        })
        this.setState({
            name: '',
            ingredients: [],
            preparation: '',
            garnish: ''
        })
    }

    handleRemove= (event, index) => {
        event.preventDefault()
        
        let copyOfIngredients = this.state.ingredients.slice();
        copyOfIngredients.splice(index, 1);
        this.setState({
            ingredients: copyOfIngredients
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
            
        });
    };

    ouncesToCl=(num)=>{
        let cL = num * 3;
        return cL
    }

    handleIng = (event, index) => {
        let ingredients = this.state.ingredients
        let targetIng = ingredients[index]; // assuming that the ingredient object is already in the array

        if (targetIng === undefined || targetIng === '') {
            targetIng = { unit: 'cl' };
        }

        let valueToSet;
        if (event.target.name === 'amount') {
            valueToSet = this.ouncesToCl(event.target.value);
        } else {
            valueToSet = event.target.value;
        }

        targetIng[event.target.name] = valueToSet;
        ingredients[index] = targetIng;

        this.setState({
            ingredients: ingredients
        });
    }

    addNewIngredient = event =>{
        this.setState({
            ingredients: [...this.state.ingredients, { unit: 'cl' }]
        })
    }


    render() {
        return (
            <div className='modal'>
                <form className="modal__add-form" onSubmit={this.submitHandler}>
                    <label className='modal__drink-title'>Name:</label>
                    <input className='modal__drink-title-field' placeholder='Name' name='name' value={this.state.name} onChange={this.handleChange}></input>
                    <br />
                    <label className='modal__ingredient-title'>Ingredients:</label>
                    { this.state.ingredients.map((ingredient, index) => {
                        return(
                            <div className='modal__ingredient-list' key={index} >
                                <input className='modal__ingredient-field' placeholder='Ingredient' name='ingredient' onChange={(event) => this.handleIng(event, index)}></input>
                                <input className='modal__amount-field' placeholder='Amount (in ounces)' name='amount' type='number' onChange={(event) => this.handleIng(event, index)}></input>
                                <button className='modal__remove-btn' onClick={(event) => this.handleRemove(event, index)}>Remove</button>
                            </div>
                        )
                    })
                    }
                    <p className='modal__add-ing-btn' onClick={this.addNewIngredient}>+</p>
                    <br />
                    <label className='modal__prep-title'>Preparation:</label>
                    <textarea className='modal__prep-field' placeholder='Preparation' name='preparation' onChange={this.handleChange} value={this.state.preparation}></textarea>
                    <br />
                    <label className='modal__garnish-title'>Garnish:</label>
                    <input className='modal__garnish-field' placeholder='Garnish' name='garnish' onChange={this.handleChange} value={this.state.garnish}></input>
                    <button className='modal__submit-btn'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Modal
