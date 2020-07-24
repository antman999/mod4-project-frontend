import React from 'react'
import PetCard from '../components/PetCard'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import About from '../components/About'
import ContactForm from '../components/ContactForm'

class PetsContainer extends React.Component {

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
    render(){
    return (
			<div>
				<button type='button' class='btn btn-primary'>
					Primary
				</button>
				<button type='button' class='btn btn-secondary'>
					Secondary
				</button>
				<button type='button' class='btn btn-success'>
					Success
				</button>
				<button type='button' class='btn btn-danger'>
					Danger
				</button>
				<button type='button' class='btn btn-warning'>
					Warning
				</button>
				<button type='button' class='btn btn-info'>
					Info
				</button>
				<button type='button' class='btn btn-light'>
					Light
				</button>
				<button type='button' class='btn btn-dark'>
					Dark
				</button>
				<Router>
				  <Route path="/pets" render={(routerProps) => <PetCard pets={this.state.pets} {...routerProps} /> } />
				  <Route path="/about" component={About} />
                  <Route path="/contact" render={(routerProps) => <ContactForm  {...routerProps} /> } />
				</Router>
				
			</div>
    );
  }
}

export default PetsContainer