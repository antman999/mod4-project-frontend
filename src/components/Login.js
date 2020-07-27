import React from 'react';

class Login extends React.Component {
	state = {
		newUser: false,
		email: '',
		password: '',
		confirmAcc: '',
		firstName: '',
		lastName: '',
		petPreference: '',
		country: '',
		city: '',
		zip: null,
		bio: '',
	};

	handleNewUser = () => {
		this.setState(prevState => ({
			newUser: !prevState.newUser,
			email: '',
			password: '',
			confirmAcc: '',
			firstName: '',
			lastName: '',
			petPreference: '',
			country: '',
			city: '',
			zip: null,
			bio: '',
		}));
    };
    
    handleChange = e => {
        this.setState({[e.target.name]:e.target.value})
    }

    

	render() {
		return (
			<div>
				<h3 className='login-header'>Login!</h3>
				<form className='login-form'>
					<input type='text' placeholder='Username' />
					<br></br>
					<input type='password' placeholder='Password' />
					<br></br>
					<button type='button' class='btn btn-primary'>
						Login
					</button>
				</form>
			</div>
		);
	}
}

export default Login;
