import React from 'react'
import { ThemeProvider } from 'react-bootstrap'

class FavoritesContainer extends React.Component {

    state = {
        user: null
    }
    


    fetchFaves = () => {
            fetch(`http://localhost:3001/api/v1/users/${this.props.user.id}`)
            .then(res => res.json())
            .then(data => {
            this.setState({
                user: data
            })
            })
        
    }
    

    
    render(){
        console.log(this.props)

      

    return (
        <div className='favorites-container'>
           <h1>Favorites!</h1>
        { this.props.user ? this.fetchFaves() : null }
        {this.state.user ? this.state.user.favorites.map(fave => <div><a href={`http://localhost:3000/pets/${fave.pet_id}`}>Pets!</a></div>)
          :
          'hello'
        }
        </div>
    )
    }
}

export default FavoritesContainer