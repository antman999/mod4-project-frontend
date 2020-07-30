import React from 'react';
import Header from '../Header';
import PetPage from './PetPage';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LostPet from './LostPet'

const PetCard = props => {
	console.log(props.pets);
	return (
		<>
			<Header />

			<Row>
				<Col xs={10}>
					{' '}
					<h4 className='petHome'>Newest Pets </h4>
					<div className='card'>
						{props.pets.map(pet => (
							<div className='card-body'>
								<Carousel>
									{pet.photos.length < 1 ? (
										<Carousel.Item>
											<img
												className='d-block w-40'
												src={
													'https://www.isedio.com/wp-content/uploads/2019/04/coming-soon-image.png'
												}
											/>
										</Carousel.Item>
									) : (
										pet.photos.map(photo => (
											<Carousel.Item>
												<img className='d' src={photo.full} alt='First slide' />
											</Carousel.Item>
										))
									)}
								</Carousel>
								<h3 className='card-title'>{pet.name}</h3>
								<h5 className='card-subtitle'>{pet.type}</h5>
								<h5>Breed: {pet.breeds.primary}</h5>
								<p>Age: {pet.age}</p>
								<p>Sex: {pet.gender}</p>
								<button
									onClick={() => props.history.push(`/pets/${pet.id}`)}
									type='button'
									class='btn btn-outline-primary'>
									See More Info
								</button>
								<button
									onClick={() => props.hidePet(pet.id)}
									type='button'
									class='btn btn-outline-danger'>
									Too Sad. Can't See This
								</button>
							</div>
						))}
					</div>
				</Col>

                <Col xs={7}>
                    
                    <h4 className='petHome'>Thanks to our Partners</h4>
					<img className="sponsor-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/PetSmart.svg/1280px-PetSmart.svg.png" 
					alt="Pet Smart" />
					<img className="sponsor-image" src="https://allvectorlogo.com/img/2017/05/purina-logo.png" alt="Purina" />
					<img className="sponsor-image" src="https://logodix.com/logo/234294.png" alt="Chewy" />
					<img className="sponsor-image" src="https://photos.prnewswire.com/prnfull/20060731/NYM024LOGO" alt="ASPCA" />
					<img className="sponsor-image" src="https://www.jamiesale-cartoonist.com/wp-content/uploads/cartoon-cat-free.png" alt="Cat" />
					<img className="sponsor-image" src="https://petguidereviews.com/wp-content/uploads/2019/02/cartoon-dog-names.jpg" alt="Dog" />
					{/* </a> */}
                
				</Col>
			</Row>
		</>
	);
};

export default PetCard;
