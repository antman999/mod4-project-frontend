import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PetPage = props => {
	let petId = props.match.params.id;
	console.log(petId);

	let displayPet = props.pets.find(pet => pet.id === parseInt(petId));
	console.log(displayPet.photos.map(photo => photo.full));
	return (
		<>
			{displayPet ? (
        
				<div>
					<Container fluid='md'>
						<Row>
							<Col>
                <Carousel>
                  {displayPet.photos.map(photo =>
                    <Carousel.Item>
										<img
											className='d-block w-40'
											src={photo.full}
											alt='First slide'
                      />
                    <Carousel.Caption>
											<h3>{displayPet.breeds.primary}</h3>
										</Carousel.Caption>
									</Carousel.Item>
                    )}
								</Carousel>
							</Col>
						</Row>
					</Container>
					<Row>
						<Col xs={6}>
							<h3 className='petName'>
								{displayPet.name} <h5>({displayPet.breed})</h5>
							</h3>
							<h6 className='location'>New york (Make Shift)</h6>
							<h2 className='about'>About our furry friend</h2>
							<p className='text'>
                {displayPet.description}
							</p>
						</Col>
            <Col xs={3}>
              <h3 className="shelter">About The Shelter</h3>
              <h6 className='contact'>Phone Number:</h6>
              <p>contact stuff from API</p>
              

            </Col>
					</Row>
				</div>
			) : (
				<div class='spinner-grow' role='status'>
					<span class='sr-only'>Loading...</span>
				</div>
			)}
		</>
	);
};

export default PetPage;
