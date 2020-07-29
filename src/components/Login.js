import React from 'react';

class Login extends React.Component {
	state = {
		newUser: false,
		email: '',
		password: '',
		passwordC: '',
		firstName: '',
		lastName: '',
		petPreference: '',
		country: '',
		city: '',
		zip: null,
		bio: '',
	};

	// handleNewUser = () => {
	// 	this.setState(prevState => ({
	// 		newUser: !prevState.newUser,
	// 		email: '',
	// 		password: '',
	// 		passwordC: '',
	// 		firstName: '',
	// 		lastName: '',
	// 		petPreference: '',
	// 		country: '',
	// 		city: '',
	// 		zip: null,
	// 		bio: '',
	// 	}));
	// };

	handleChange = e => {
		console.log(e.target.value);
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();

		if (this.state.password === this.state.passwordC) {
			fetch('http://localhost:3001/api/v1/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify({
					email: this.state.email,
					password_digest: this.state.password,
					first_name: this.state.firstName,
					last_name: this.state.last_name,
					pet_preference: this.state.petPreference,
					country: this.state.country,
					city: this.state.city,
					zip: this.state.zip,
				}),
			})
				.then(res => res.json())
				.then(response => {
					if (response.errors) {
						alert(response.errors);
                    } else {
                     
							// // send them somewhere
							// // storing the user object SOMEWHERE
							this.props.setUser(response);
							this.props.history.push('/pets')
					}
				});
		} else {
			alert("Passwords don't match!");
		}
	};

	render() {
		console.log(this.props)
		return (
			<div>
				<h3 className='login-header'>Login!</h3>
				<form onSubmit={this.handleSubmit}>
					<input
						name='email'
						value={this.state.email}
						onChange={this.handleChange}
						type='text'
						placeholder='Email'
                    />
                    <br></br>

					<input
						name='firstName'
						value={this.state.firstName}
						onChange={this.handleChange}
						type='text'
						placeholder='first name...'
                    />
                    <br></br>
					<input
						name='lastName'
						value={this.state.lastName}
						onChange={this.handleChange}
						type='text'
						placeholder='last name...'
                    />
                    <br></br>

					<input
						name='country'
						value={this.state.country}
						onChange={this.handleChange}
						type='text'
						placeholder='Country'
					/>
					<input
						name='city'
						value={this.state.city}
						onChange={this.handleChange}
						type='text'
						placeholder='city'
					/>
					<input
						name='password'
						value={this.state.password}
						onChange={this.handleChange}
						type='password'
						placeholder='password'
					/>

					<input
						name='passwordC'
						value={this.state.passwordC}
						onChange={this.handleChange}
						type='password'
						placeholder=' confirm password'
					/>

					<button type='submit' class='btn btn-primary'>
						Sign Up
					</button>
				</form>
			</div>
		);
	}
}

export default Login;
