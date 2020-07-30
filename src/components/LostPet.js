import React from 'react'
import LostForm from './LostForm'
import ContactForm from './ContactForm'
import PetCard from './PetCard'

class LostPet extends React.Component {

    state = {
       lostPets: [],
       pet_type: '',
       location: '',
       img_url: '',
       form: 'false',
    }
    
    componentDidMount(){
        fetch('http://localhost:3001/api/v1/lost_pets')
        .then(res => res.json())
        .then(lostPets => {
            this.setState({
                lostPets
            })
        })
    }

    formToggle = () => {
      this.setState({form: !this.state.form})
    }


    formHandler = (e) => {
       this.setState({
           [e.target.name]: e.target.value
       })
    }

    submitHandler = (e) => {
        const{  pet_type, location, img_url } = this.state
        e.preventDefault();
        fetch('http://localhost:3001/api/v1/lost_pets', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({
              pet_type,
              location,
              img_url
            })
        })
        .then(res => res.json())
        .then(pet => {
          this.setState({
              lostPets: [...this.state.lostPets, pet]
          })
          this.setState({
            pet_type: '',
            location: '',
            img_url: '',
          })
        })

    }

    moreInfo = (e) => {
        this.props.history.push('/contact')

    }

    render(){
        console.log(this.state)
        return(
            <div className="lost-page">
               
                <h3 className="create-header">Lost Pets</h3>
                <p>Unfortunately, sometimes our furry friends get a little lost. Here's a forum to post found pets and help relocate them to their families.</p>
                <div id='form-toggle'>
                <button onClick={this.formToggle}  class='btn btn-primary'>{this.state.form ? 'Add Lost Pet' : 'Hide Form' }</button>
                </div>


                {this.state.form ? null 
                : <LostForm 
                  petType={this.state.pet_type}
                  location={this.state.location}
                  imgUrl={this.state.img_url}
                  formHandler={this.formHandler} 
                  submitHandler={this.submitHandler} />}
                
                <div className="card">
                {this.state.lostPets.map(lostPet => 
                
                <div className="card-body">
                    <>
                    <img className="card-pic" src={lostPet.img_url} /> 
                    <h3 className="card-title">Case Number: {lostPet.id}</h3>
                    <h3 className="card-title">Location Found: {lostPet.location}</h3>
                    <h5 className="card-subtitle">Found Pet Type: {lostPet.pet_type}</h5>
                    <button onClick={this.moreInfo} 
                    id={lostPet.id} class='btn btn-outline-primary'>Have More Info?</button>
                    </>
                
                </div>
                 )}
                </div> 


            </div>
        )
    }
}

export default LostPet