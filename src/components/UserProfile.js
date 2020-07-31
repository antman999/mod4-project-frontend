import React from 'react'
import FavoritesContainer from '../containers/FavoritesContainer'


const UserProfile = (props) => {
   
    return(
        <div>
           
          <h1 className="profile-header"> {props.user ? props.user.first_name + ' ' + props.user.last_name : 'No Name Provided'}'s Profile Page</h1>  
          <FavoritesContainer user={props.user} pets={props.pets} deleteFave={props.deleteFave} />
          <img className="profile-image" src='https://static9.depositphotos.com/1000792/1134/v/450/depositphotos_11348824-stock-illustration-cat-and-dog.jpg'  alt='default pic' />
          <br></br>
          <div className="personal-info"> 
            <h5>Name: {props.user ? props.user.first_name + ' ' + props.user.last_name : 'No Name Provided'}</h5>
            <h5>Email Address: {props.user ? props.user.email : 'None Provided'}</h5>
            </div>
            <button onClick={props.logout}>log out</button>
        </div>

    )
}

export default UserProfile