import React, { Component } from 'react'
import Header from '../Header'
import NavBar from '../NavBar'
import PetsContainer from './PetsContainer';
import PetCard from '../components/PetCard'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import About from '../components/About'
import ContactForm from '../components/ContactForm'
import PetPage from '../components/PetPage'
import Home from '../components/Home'
import Login from '../components/Login'
import LostPet from '../components/LostPet'



class HomeContainer extends Component {
	state = {
		pets: [],
		token: '',
    filterBy: '',
    currentUser:null
	};

	componentDidMount() {
		fetch('https://api.petfinder.com/v2/oauth2/token', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				grant_type: 'client_credentials',
				client_id: '3ZzjR0Nnn3z0kJL2kUa9nIZFOkf5qmGUDsEAWfcEdhQvNWfjJN',
				client_secret: '0B9CuxL5JNVl9DcTIOmCzvDRsK6mpzSQijJReNCp',
			}),
		})
			.then(res => res.json())
			.then(token => {
				this.setState({ token: token }, () => this.getPets());
			});
	}

	getPets = () => {
		fetch('https://api.petfinder.com/v2/animals', {
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
	};

		// addPet = (pet) => {
		// 	this.setState({
		// 		pets: [...this.state.pets, pet ]
		// 	})
		// }

	filterHandler = e => {
		this.setState({
			filterBy: e.target.name,
		});
	};

  setUser = user => {
    console.log(this.props)
    this.setState({ currentUser: user }, () => {
      this.props.history.push('/pets');
    }	);
	};
// 
	render() {
		let filteredPets = [...this.state.pets];
		if (this.state.filterBy === 'dogs') {
			filteredPets = filteredPets.filter(pet => pet.type === 'Dog');
		} else if (this.state.filterBy === 'cats') {
			filteredPets = filteredPets.filter(pet => pet.type === 'Cat');
		} else if (this.state.filterBy === 'birds') {
			filteredPets = filteredPets.filter(pet => pet.type === 'Bird');
		} else if (this.state.filterBy === 'all') {
			filteredPets = filteredPets;
    }
    console.log(this.state.currentUser)
		return (
			<div>
				<NavBar
					filterBy={this.state.filterBy}
					filterHandler={this.filterHandler}
				/>
				<PetsContainer />
				<Router>
					<Route
						exact
						path='/pets/:id'
						render={routerProps => (
							<PetPage pets={this.state.pets} {...routerProps} />
						)}
					/>
					<Route
						exact
						path='/pets'
						render={routerProps => (
							<PetCard pets={filteredPets} {...routerProps} />
						)}
					/>
					<Route path='/about' component={About} />
					<Route
						path='/contact'
						render={routerProps => <ContactForm {...routerProps} />}
					/>
					<Route exact path='/' component={Home} />
					<Route
						exact
						path='/login'
						render={routerProps =>( <Login setUser={this.setUser} />)}
					/>
					<Route
						exact
						path='/lost'
						render={routerProps => (
							<LostPet {...routerProps} addPet={this.addPet} />
						)}
					/>
				</Router>
			</div>
		);
	}
}

export default HomeContainer
