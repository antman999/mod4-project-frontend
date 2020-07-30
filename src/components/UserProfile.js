import React from 'react'
import FavoritesContainer from '../containers/FavoritesContainer'


const UserProfile = (props) => {
   
    return(
        <div>
           
          <h1> {props.user ? props.user.first_name + ' ' + props.user.last_name : 'No Name Provided'}'s Profile Page</h1>  
          <FavoritesContainer user={props.user} pets={props.pets} />
          <img src='https://static9.depositphotos.com/1000792/1134/v/450/depositphotos_11348824-stock-illustration-cat-and-dog.jpg'  alt='default pic' />
          
        </div>

    )
}

export default UserProfile