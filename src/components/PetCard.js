import React from 'react'
import Header from '../Header'
import PetPage from './PetPage'

const PetCard = (props) => {
    console.log(props.pets);
    return (
        <>
				<Header />
	
        <div className="card">
         
                {props.pets.map(pet =>
               
        <div className="card-body">
           {console.log(pet.photos[0])}
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