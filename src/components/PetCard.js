import React from 'react'
import Header from '../Header'
import PetPage from './PetPage'

const PetCard = (props) => {
   
    return (
        <>
				<Header />
	
        <div className="card">
         
                {props.pets.map(pet =>
               
        <div className="card-body">
            {pet.photos.map(photo => <img className="card-pic" src={photo.small} /> )}
            <h3 className="card-title">{pet.name}</h3>
            <h5 className="card-subtitle">{pet.type}</h5>
            <h5>Breed: {pet.breeds.primary}</h5>
            <p>Age: {pet.age}</p>
            <p>Sex: {pet.gender}</p>
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