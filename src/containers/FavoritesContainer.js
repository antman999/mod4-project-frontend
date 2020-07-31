import React from 'react'
import { ThemeProvider } from 'react-bootstrap'

class FavoritesContainer extends React.Component {

    state = {
        user: null
    }
    
    componentDidMount(){
        if(this.props.user === true){
        this.setState({
            user: this.props.user
        })
       }
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


    // componentDidMount(){
    //     this.fetchFaves()
    // }
    

    
    render(){
        console.log(this.props)

      

    return (
        <div className='favorites-container'>
           <h1 className="favorites-header">Favorites!</h1>
        {/* {this.props.user ? this.componentDidMount() : null }  */}
        {this.props.user ? this.fetchFaves() : null }
        {this.state.user ? this.state.user.favorites.map(fave => <div className="fave"><a href={`http://localhost:3000/pets/${fave.pet_id}`}>Pet #{fave.pet_id}!</a> </div>)
          :
          'Please Login or Sign Up to Make Favorites'
        }
        </div>
    )
    }
}

export default FavoritesContainer