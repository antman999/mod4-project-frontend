import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';



const PetPage = props => {
	let petId = props.match.params.id;

  let displayPet = props.pets.find(pet => pet.id === parseInt(petId));
  console.log(displayPet)
  
  let no = <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.146-3.146a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z"/>
  </svg>
  let yes = <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
    
  </svg>
  let heart = <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
  </svg>
  

	return (
		<>
			{displayPet ? (
				<div>
					<Container fluid='md'>
						<Row>
							<Col>
								<Carousel>
									{displayPet.photos.map(photo => (
										<Carousel.Item>
											<img
												className='d-block w-40'
												src={photo.large}
												alt='First slide'
											/>
											<Carousel.Caption>
												<h3>{displayPet.name}</h3>
											</Carousel.Caption>
										</Carousel.Item>
									))}
								</Carousel>
							</Col>
						</Row>
					</Container>
					<Container fluid='md'>
						<Row>
							<Col xs={6}>
								<h3 className='petName'>
									{displayPet.name} <h5>({displayPet.breeds.primary})</h5>
								</h3>
								<h6 className='location'>
									{displayPet.contact.address.city},{' '}
									{displayPet.contact.address.state}{' '}
									{displayPet.contact.address.postcode}
								</h6>
								<h2 className='about'>About our furry friend {heart} </h2>
								<p className='text'>{displayPet.description}</p>

								<h6 className='petBefore'>
									Some things to know before adopting
								</h6>
								<Table striped bordered hover variant='dark'>
									<thead>
										<tr>
											<th>Information</th>
											<th>Currently</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>House Trained?</td>
											<td>{displayPet.attributes.house_trained ? yes : no}</td>
										</tr>
										<tr>
											<td>Shots up to date?</td>
											<td>{displayPet.attributes.shots_current ? yes : no}</td>
										</tr>
										<tr>
											<td>Spayed/neutered?</td>
											<td colSpan='2'>
												{displayPet.attributes.spayed_neutered ? yes : no}
											</td>
										</tr>
										<tr>
											<td>Special Needs?</td>
											<td colSpan='2'>
												{displayPet.attributes.special_needs ? yes : no}
											</td>
										</tr>
									</tbody>
								</Table>
							</Col>
							<Col xs={4}>
								<Card>
									<h4 className='aboutC'>About the Shelter</h4>
									<Card.Body>
										<Card.Title>Address</Card.Title>
										<Card.Text>
											{displayPet.contact.address.address1}{' '}
											{displayPet.contact.address.address2}
										</Card.Text>
										<Card.Title>Location</Card.Title>
										<Card.Text>
											{displayPet.contact.address.city}{' '}
											{displayPet.contact.address.state},{' '}
											{displayPet.contact.address.postcode}
										</Card.Text>
										<Card.Title>Contact Us</Card.Title>
										<Card.Text>Email: {displayPet.contact.email}</Card.Text>
										<Card.Text>Phone: {displayPet.contact.phone}</Card.Text>
										<Button href={displayPet.url} variant='primary'>
											Start Adoption
										</Button>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Container>
					
					<Container fluid='md'>
						<Row>
							<Col className='info'>
								<div><h2 className='why'>Why Adopt?</h2>
                  <CardDeck>
                    
										<Card>
											<Card.Img
												variant='top'
												src='https://ewscripps.brightspotcdn.com/dims4/default/ba90fcb/2147483647/strip/true/crop/5444x3062+3+381/resize/1280x720!/quality/90/?url=https%3A%2F%2Fewscripps.brightspotcdn.com%2F3e%2F55%2F3aab27c94adb9a3d0ff797e3fdc0%2Fanimal-animal-lover-animal-photography-1904105.jpg'
											/>
											<Card.Body>
												<Card.Title>Saving A Life</Card.Title>
												<Card.Text>
													Each year in the United States alone, 2.7 million
													adoptable dogs and cats are euthanized because too few
													people adopt from shelters. Because space within
													shelters is limited, staff members too frequently are
													required to decide which animals will be euthanized.
													The number of euthanized animals could be reduced
													dramatically if more people adopted pets instead of
													buying them.
												</Card.Text>
											</Card.Body>
											<Card.Footer>
												<small className='text-muted'>
													https://www.humanesociety.org/resources/top-reasons-adopt-pet
												</small>
											</Card.Footer>
										</Card>
										<Card>
											<Card.Img
												variant='top'
												src='https://www.plantbasednews.org/.image/t_share/MTY1NTk1NTY1MDc5MzQwODM3/image-placeholder-title.jpg'
											/>
											<Card.Body>
												<Card.Title>Fighting Puppy Mills</Card.Title>
												<Card.Text>
													Puppy mills are factory-style breeding facilities that
													put profit above the welfare of dogs. Animals from
													puppy mills are housed in shockingly poor conditions
													with improper medical care, and are often very sick
													and behaviorally troubled as a result. The moms of
													these puppies are kept in cages to be bred over and
													over for years, without human companionship and with
													little hope of ever joining a family. And after
													they're no longer profitable, breeding dogs are simply
													discarded—either killed, abandoned or sold at auction.
												</Card.Text>
											</Card.Body>
											<Card.Footer>
												<small className='text-muted'>
													https://www.humanesociety.org/resources/top-reasons-adopt-pet
												</small>
											</Card.Footer>
										</Card>
										<Card>
											<Card.Img
												variant='top'
												src='https://www.michiganhumane.org/wp-content/uploads/2018/02/Adopt-a-Pet-e1564001391162.jpg'
											/>
											<Card.Body>
												<Card.Title>
													Because adoption helps more than just one animal.
												</Card.Title>
												<Card.Text>
													Overburdened shelters take in millions of stray,
													abused and lost animals every year, and by adopting an
													animal, you’re making room for others. Not only are
													you giving more animals a second chance, but the cost
													of your adoption goes directly towards helping those
													shelters better care for the animals they take in!
												</Card.Text>
											</Card.Body>
											<Card.Footer>
												<small className='text-muted'>
													https://www.humanesociety.org/resources/top-reasons-adopt-pet
												</small>
											</Card.Footer>
										</Card>
									</CardDeck>
								</div>
							</Col>
						</Row>
					</Container>
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
