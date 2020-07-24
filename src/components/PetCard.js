import React from 'react'

const PetCard = (props) => {
    return (
        <>
        {props.pets.map(pet =>
        <div className="pet-card">
           
            <img src={pet.img_url} alt={pet.name} />
            <h2>{pet.type}</h2>
            <h3>{pet.breed}</h3>
            <h4>{pet.age}</h4>
            <h4>{pet.sex}</h4>
            <button type="button" class="btn btn-outline-primary">See More Info</button>
        
        </div>
        )}
        </>
    )
}

export default PetCard