import React, { Component } from 'react'
import NavBar from '../NavBar'
import PetCard from '../components/PetCard'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import PetPage from '../components/PetPage'
import Home from '../components/Home'
import Login from '../components/Login'
import LostPet from '../components/LostPet'
import UserProfile from '../components/UserProfile'



class HomeContainer extends Component {
	state = {
		pets: [],
		token: '',
		filterBy: '',
		currentUser: null,
		likes: false,
		favorites: [],
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
		const user_id = localStorage.user_id;
		if (user_id) {
			fetch('http://localhost:3001/api/v1/autologin', {
				headers: {
					Authorization: user_id,
				},
			})
				.then(resp => resp.json())
				.then(resp => this.setState({ currentUser: resp }));
		} else {
		}
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

	filterHandler = e => {
		this.setState({
			filterBy: e.target.name,
		});
	};

	setUser = user => {
		console.log(this.props);
		this.setState(
			{ currentUser: user },
			() => {
				localStorage.user_id = user.id;
			}
			// 	() => {
			//   this.props.history.push('/pets');}
		);
	};

	logout = () => {
		this.setState(
			{
				currentUser: null,
			},
			() => {
				localStorage.removeItem('user_id');
				// this.props.history.push('/login');
			}
		);
	};

	likeHandler = id => {
		let likedPet = this.state.pets.find(pet => pet.id === id);
		fetch('http://localhost:3001/api/v1/favorites', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				user_id: this.state.currentUser.id,
				pet_id: likedPet.id,
			}),
		})
			.then(resp => resp.json())
			.then(data => {
				let foundPet = this.state.pets.find(pet => pet.id === data.pet_id);
				this.setState({ favorites: foundPet });
			});
		this.setState({
			likes: !this.state.likes,
		});
	};

	hidePet = id => {
		let newPets = this.state.pets.filter(pet => pet.id !== id);
		this.setState({
			pets: newPets,
		});
	};

	render() {
		let filteredPets = [
			...this.state.pets.filter(pets => pets.photos.length >= 1),
		];
		if (this.state.filterBy === 'dogs') {
			filteredPets = filteredPets.filter(pet => pet.type === 'Dog');
		} else if (this.state.filterBy === 'cats') {
			filteredPets = filteredPets.filter(pet => pet.type === 'Cat');
		} else if (this.state.filterBy === 'birds') {
			filteredPets = filteredPets.filter(pet => pet.type === 'Bird');
		} else if (this.state.filterBy === 'all') {
			filteredPets = filteredPets;
		}

		return (
			<div>
				<NavBar
					filterBy={this.state.filterBy}
					filterHandler={this.filterHandler}
					user={this.state.currentUser}
				/>
				<Router>
					<Route
						exact
						path='/pets/:id'
						render={routerProps => (
							<PetPage
								pets={this.state.pets}
								{...routerProps}
								likes={this.state.likes}
								likeHandler={this.likeHandler}
							/>
						)}
					/>
					<Route
						exact
						path='/pets'
						render={routerProps => (
							<PetCard
								pets={filteredPets}
								{...routerProps}
								hidePet={this.hidePet}
							/>
						)}
					/>
					<Route
						path='/contact'
						render={routerProps => <ContactForm {...routerProps} />}
					/>
					<Route exact path='/' component={Home} />
					<Route
						exact
						path='/login'
						render={routerProps => (
							<Login setUser={this.setUser} {...routerProps} />
						)}
					/>
					<Route
						exact
						path='/lost'
						render={routerProps => (
							<LostPet {...routerProps} addPet={this.addPet} />
						)}
					/>
					<Route
						exact
						path='/profile_page'
						render={routerProps => (
							<UserProfile
								{...routerProps}
								user={this.state.currentUser}
								pets={this.state.pets}
								logout={this.logout}
							/>
						)}
					/>
				</Router>
			</div>
		);
	}
}

export default HomeContainer
