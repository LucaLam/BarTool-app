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

    convertToOunces=(num)=>{
        if(num){
        let ounces = Math.round(num /3 * 100) / 100;
        return ounces;} else{
            return;
        }
    };

    convertUnit = (value)=>{
        if(value){
            return 'oz';
        }
    };

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

    render() {
        console.log(this.state.saved);
        
    let savedDrinkList = this.state.saved.map(item => {
            return(
            <div className='saved'>
                {/* <Remove /> */}
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
