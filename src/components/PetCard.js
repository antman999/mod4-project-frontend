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
							</div>
						))}
					</div>
				</Col>

                <Col xs={7}>
                    {/* <a href='/lost'> */}
                    <h4 className='petHome'>Lost Buddies </h4>
					
					{/* </a> */}

				</Col>
			</Row>
		</>
	);
};

export default PetCard;
