import React, { Component } from 'react'
import Header from '../Header'
import PetsContainer from './PetsContainer';
import PetCard from '../components/PetCard'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import About from '../components/About'
import ContactForm from '../components/ContactForm'
import PetPage from '../components/PetPage'
import Home from '../components/Home'
import Login from '../components/Login'
import CreatePet from '../components/CreatePet'
import NavBar from '../NavBar';


class HomeContainer extends Component {

    state = {
      pets: [],
      token:''
	  }
	
	  componentDidMount(){
      fetch('https://api.petfinder.com/v2/oauth2/token', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "grant_type": "client_credentials", "client_id": '3ZzjR0Nnn3z0kJL2kUa9nIZFOkf5qmGUDsEAWfcEdhQvNWfjJN', "client_secret": '0B9CuxL5JNVl9DcTIOmCzvDRsK6mpzSQijJReNCp'
        }),
      })
				.then(res => res.json())
        .then(token => {
          this.setState({ token: token }, () => this.getPets());
        });
        
    }
  
  
  getPets = () => {
    fetch('https://api.petfinder.com/v2/animals?type=dog&page=2', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + this.state.token.access_token,
			},
		})
			.then(resp => resp.json())
			.then(data => {
				this.setState({ pets: data.animals });
			});
  }
  

	addPet = (pet) => {
		this.setState({
			pets: [...this.state.pets, pet ]
		})
	}

  render() {
    return (
	  <div>
        <PetsContainer />
		<Router>
			<Route exact path='/pets/:id' render={routerProps => (<PetPage pets={this.state.pets} {...routerProps}/>)} />
			<Route exact path='/pets' render={routerProps => (<PetCard pets={this.state.pets} {...routerProps}/>)} />
			<Route path='/about' component={About} />
			<Route path='/contact'render={routerProps => <ContactForm {...routerProps} />} />
			<Route exact path='/' component={Home} />
			<Route exact path='/login' component={Login} />
			<Route exact path='/create' render={routerProps => <CreatePet {...routerProps} addPet={this.addPet} />} /> 
		</Router>
	  </div>
    )
  }
}

export default HomeContainer
