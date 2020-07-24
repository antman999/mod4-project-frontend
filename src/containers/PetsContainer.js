import React from 'react'
import PetCard from '../components/PetCard'

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
			
				<PetCard pets={this.state.pets} />
			</div>
    );
  }
}

export default PetsContainer