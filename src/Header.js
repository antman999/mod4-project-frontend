import React from 'react'
import './index.css';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import NavBar from './NavBar';

const Header = () => {
  return (
		<div>
			<header class='masthead'>
				<NavBar />
				<div class='container h-100'>
					<div class='row h-100 align-items-center'>
						<div class='col-12 text-center'>
							<h1 class='font-weight-bold'>We All Deserve A Second Chance.</h1>
							<Button variant='success'>Sign Up</Button>
						</div>
					</div>
				</div>
			</header>
			<Jumbotron fluid>
				<Container>
					<h1>Adopting A Best Friend Saves Lives</h1>
					<p>
						Each year, approximately 1.5 million shelter animals are euthanized
						(670,000 dogs and 860,000 cats)
					</p>
				</Container>
			</Jumbotron>
		</div>
	);
}

export default Header
