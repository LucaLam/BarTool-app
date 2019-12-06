import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios';
import Logo from './Logo';
import './savedPage.scss';
import Remove from './Remove';

export class SavedPage extends Component {
    state={
        saved:[]
    };
    //converts cl (integer) to ounces
    convertToOunces=(num)=>{
        if(num){
        let ounces = Math.round(num /3 * 100) / 100;
        return ounces;} else{
            return;
        }
    };
    //converts cl (measurement data uses) to 'oz' (common measurement)
    convertUnit = (value)=>{
        if(value){
            return 'oz';
        }
    };

    //retrieves the array of saved drinks from a specific user and saves it to state; we can use that to map through and display the data
    componentDidMount(){
        axios.get("http://localhost:8080/user").then(response => {
            let saved = response.data.filter(user => user.name === localStorage.getItem('user'));
            saved.map(item => {
                this.setState({
                    saved: item.savedDrinks
                })
                
            })
        }
        )}

    //removes a saved drink from the array of a specific user and updates the state
    deleteSavedDrink = (index) => (event) => {
        axios.delete(`http://localhost:8080/user/${localStorage.getItem('user')}/savedDrink/${index}`).then(response => {
            console.log(response)  
            this.setState({
                saved: response.data.savedDrinks
            })

        })
    }

    render() {
        
        
    let savedDrinkList = this.state.saved.map((item, i) => {
        console.log(item)
            return(
            <div className='saved'>
                <Remove deleteSavedDrink={this.deleteSavedDrink(i)} />
                <h2 className='saved__title'>{item.name}</h2>
                <ul>
                {
                    item.ingredients.map(item => {
                        return(
                            <>
                            { item.amount || item.unit || item.ingredient  ? <li className='saved__ingredient-item'>{this.convertToOunces(item.amount)} {this.convertUnit(item.unit)} {item.ingredient}</li> : null}
                            { item.special ? <li className='saved__ingredient-item'>{item.special}</li> : null}
                            </>
                        )
                    })
                }
                </ul>
                <p className='saved__prep'>{item.preparation}</p>
                <p className='saved__garnish'>Garnish: {item.garnish}</p>
            </div>
            )
        })
        return (
            <div>
                <Header />
                {savedDrinkList}
                <Logo />
            </div>
        )
        }
}


export default SavedPage
