import React from 'react'
import Header from '../Header'
import PetPage from './PetPage'

const PetCard = (props) => {
    console.log(props.history.push);
    return (
			<>
				<Header />
				{props.pets.map(pet => (
					<div className='pet-card'>
						<img src={pet.img_url} alt={pet.name} />
						<h2>{pet.type}</h2>
						<h3>{pet.breed}</h3>
						<h4>{pet.age}</h4>
						<h4>{pet.sex}</h4>
                        <button onClick={() => props.history.push(`/pets/${pet.id}`)}type='button' class='btn btn-outline-primary'>
							See More Info
						</button>
					</div>
				))}
			</>
		);
}

export default PetCard