import React from 'react'
import LostForm from './LostForm'
import ContactForm from './ContactForm'
import PetCard from './PetCard'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';

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
        return (
					<div className='lost-page'>
						<h3 className='create-header'>Lost Pets</h3>
						<p>
							Unfortunately, sometimes our furry friends get a little lost.
							Here's a forum to post found pets and help relocate them to their
							families.
						</p>
						<div id='form-toggle'>
							<button onClick={this.formToggle} class='btn btn-primary'>
								{this.state.form ? 'Add Lost Pet' : 'Hide Form'}
							</button>
						</div>

						{this.state.form ? null : (
							<LostForm
								petType={this.state.pet_type}
								location={this.state.location}
								imgUrl={this.state.img_url}
								formHandler={this.formHandler}
								submitHandler={this.submitHandler}
							/>
						)}

						<div className='card' style={{ margin: '25px' }}>
							{this.state.lostPets.map(lostPet => (
								<div>
									<>
										<Card style={{ width: '18rem' }}>
											<Card.Img
												className='lostpic'
												variant='top'
												src={lostPet.img_url}
											/>
											<Card.Body className='cards'>
												<Card.Title>Lost Friend</Card.Title>
												<Card.Text>Case Number: {lostPet.id}</Card.Text>
												<Card.Text>
													Location Found/lost: {lostPet.location}
												</Card.Text>
												<Card.Text>
													Found Pet Type/description: {lostPet.pet_type}
												</Card.Text>
												<button
													onClick={this.moreInfo}
													id={lostPet.id}
													class='btn btn-outline-primary'>
													Have More Info?
												</button>
											</Card.Body>
										</Card>
									</>
								</div>
							))}
						</div>
					</div>
				);
    }
}

export default LostPet
    
