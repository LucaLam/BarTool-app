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
        event.preventDefault();
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
        console.log(copyOfIngredients);

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
            // valueToSet = event.target.value;
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
                    <label>Name:</label>
                    <input placeholder='name' name='name' value={this.state.name} onChange={this.handleChange}></input>
                    <br />
                    <label>Ingredients:</label>
                    { this.state.ingredients.map((ingredient, index) => {
                        return(
                            <div key={index}>
                                <input placeholder='ingredient' name='ingredient' onChange={(event) => this.handleIng(event, index)}></input>
                                <input placeholder='amount (1oz = 3cl)' name='amount' type='number' onChange={(event) => this.handleIng(event, index)}></input>
                                <button onClick={(event) => this.handleRemove(event, index)}>Remove</button>
                            </div>
                        )
                    })
                    }
                    <p onClick={this.addNewIngredient}>+</p>
                    <br />
                    <label>Preparation:</label>
                    <textarea placeholder='preparation' name='preparation' onChange={this.handleChange} value={this.state.preparation}></textarea>
                    <br />
                    <label>Garnish:</label>
                    <input placeholder='garnish' name='garnish' onChange={this.handleChange} value={this.state.garnish}></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Modal
