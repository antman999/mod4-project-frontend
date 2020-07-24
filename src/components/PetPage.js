import React from 'react'

const PetPage = (props) => {
    let petId = props.match.params.id 

    let displayPet = props.pets.find(pet => pet.id === parseInt(petId))
    console.log(props)
    return(
        <>
        
        
          {displayPet ? 
        (<div>
            <h1>{displayPet.breed}</h1>
            <img src={displayPet.img_url} alt={displayPet.name} />
        </div>)
           :
           (<div>Loading</div>)
          }
        
        </>
    )
}

export default PetPage