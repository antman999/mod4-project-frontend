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
					last_name: this.state.lastName,
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
                        this.props.history.push('/profile_page')
                        
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
				<form onSubmit={this.handleSubmit} className="signup">
					<h3>Sign Up</h3>

					<div className='form-group'>
						<label>First name</label>
						<input
							className='form-control'
							placeholder='First name'
							name='firstName'
							value={this.state.firstName}
							onChange={this.handleChange}
							type='text'
						/>
					</div>

					<div className='form-group'>
						<label>Last name</label>
						<input
							type='text'
							className='form-control'
							placeholder='Last name'
							name='lastName'
							value={this.state.lastName}
							onChange={this.handleChange}
						/>
					</div>

					<div className='form-group'>
						<label>Email address</label>
						<input
							name='email'
							value={this.state.email}
							onChange={this.handleChange}
							type='email'
							className='form-control'
							placeholder='Enter email'
						/>
					</div>

					<div className='form-group'>
						<label>Password</label>
						<input
							name='password'
							value={this.state.password}
							onChange={this.handleChange}
							type='password'
							className='form-control'
							placeholder='Enter password'
						/>
					</div>

					<div className='form-group'>
						<label>Password Confirmation</label>
						<input
							name='passwordC'
							value={this.state.passwordC}
							onChange={this.handleChange}
							type='password'
							className='form-control'
							placeholder='Confirm password'
						/>
					</div>

					<button type='submit' className='btn btn-primary btn-block'>
						Sign Up
					</button>
				</form>
			</div>
		);
	}
}

export default Login;
