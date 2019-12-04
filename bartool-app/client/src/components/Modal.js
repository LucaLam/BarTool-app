import React, { Component } from 'react'
import './modal.scss'

export class Modal extends Component {

    state={
        name: '',
        ingredients: [],
        preparation: '',
        garnish: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
            
        });
    };

    addNewIngredient = event =>{
        this.setState({
            ingredients: [...this.state.ingredients, '']
        })
    }


    render() {
        console.log(this.state);
        return (
            <div className='modal'>
                <form className="modal__add-form">
                    <label>Name:</label>
                    <input placeholder='name' name='name' value={this.state.name} onChange={this.handleChange}></input>
                    <br />
                    <label>Ingredients:</label>
                    { this.state.ingredients.map(ingredient => {
                        return(
                            <>
                                <input placeholder='ingredient' name='ingredient' value={ingredient} onChange={this.handleChange}></input>
                                <input placeholder='amount (1oz = 3cl)' name='amount' type='number' onChange={this.handleChange}></input>
                                <input name='unit' value='cl' ></input>
                            </>
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
