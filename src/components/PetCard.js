import React from 'react'
import Header from '../Header'
import PetPage from './PetPage'

const PetCard = (props) => {
    console.log(props.history.push);
    return (
        <>
				<Header />
	
        <div className="card">
         
        {props.pets.map(pet =>
        
        <div className="card-body">
           
            <img className="card-pic"src={pet.img_url} alt={pet.name} />
            <h3 className="card-title">{pet.name}</h3>
            <h5 className="card-subtitle">{pet.pet_type}</h5>
            <h5>Breed: {pet.breed}</h5>
            <p>Age: {pet.age}</p>
            <p>Sex: {pet.sex}</p>
          <button onClick={() => props.history.push(`/pets/${pet.id}`)}type='button' class='btn btn-outline-primary'>
							See More Info
		</button>
        
        </div>
        )}
     </div>
    </>
    
    
    )
}

export default PetCard