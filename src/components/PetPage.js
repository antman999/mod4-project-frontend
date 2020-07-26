import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PetPage = props => {
	let petId = props.match.params.id;
	console.log(petId);

	let displayPet = props.pets.find(pet => pet.id === parseInt(petId));
	console.log(props);
	return (
		<>
			{displayPet ? (
				<div>
					<Container fluid='md'>
						<Row>
							<Col>
								<Carousel>
									<Carousel.Item>
										<img
											className='d-block w-40'
											src={displayPet.img_url}
											alt='First slide'
										/>
										<Carousel.Caption>
											<h3>{displayPet.breed}</h3>
										</Carousel.Caption>
									</Carousel.Item>
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
								Alot of word were we will include an about from the api info but
								for now its this stuff that doesnt make sense eudowords are
								words which look like they are real, but actually have no
								meaning. They are easy to pronounce, and this also helps to make
								them sound like they are real. Pseudowords have been around ever
								since our brain evolved the ability to process language, it is
								probably how all our modern day words came into being. A
								language has a lot of sounds called phonemes which when used in
								various combinations, you can create relatable sounds that do
								not have any me
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
