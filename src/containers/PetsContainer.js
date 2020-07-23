import React from 'react'
import PetCard from '../components/PetCard'

const PetsContainer = () => {
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
				<PetCard />
			</div>
		);
}

export default PetsContainer