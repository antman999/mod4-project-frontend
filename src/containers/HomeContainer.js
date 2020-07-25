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


class HomeContainer extends Component {

    state = {
		pets: []
	  }
	
	  componentDidMount(){
		fetch('http://localhost:3001/api/v1/pets')
		.then(res => res.json())
		.then(pets => {
		  this.setState({ pets })
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
			<Route exact path='/create' component={CreatePet} />
		</Router>
	  </div>
    )
  }
}

export default HomeContainer
