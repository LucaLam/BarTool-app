import React, { Component } from 'react';
import './app.scss';
import "./components/login.scss";
import axios from "axios";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Search from './components/Search';
import SavedPage from './components/SavedPage';
import Login from "./components/LogIn"

export class App extends Component {
  state = {
    id: "",
    user: "",
    redirect: false,
    noShow: false
};

handleSubmit = event => {
  event.preventDefault();
  if (!this.state.id || isNaN(this.state.id)) {
  return alert("ID Required!");
  } else {
  axios.get("http://localhost:8080/user").then(response => {
      //look thru data, compare existing IDs to entered ID and 'grant entry' or return an alert
      let user = response.data.find(user => user.id === this.state.id)
          if(!user){
              alert('User Not Found!')
          } else{
              this.setState({
                  user: user.name,
                  id: "",
                  redirect: true
              })
          }
  })
  
  }
};

handleChange = event => {
  this.setState({
  id: event.target.value
  });
};

  render() {
    return (
      <>
      <div>
    </div>
    <BrowserRouter>
    <Switch>
    <Route path="/" exact render={() => <Login 
      id={this.state.id}
      user={this.state.user}
      redirect={this.state.redirect}
      handleSubmit={this.handleSubmit}
      handleChange={this.handleChange} />} />
    <Route path='/search' render={() => <Search user={this.state.user} />} />
    <Route path='/saved' component={SavedPage} />
    </Switch>
    </BrowserRouter>
    </>
    )
  }
}

export default App

