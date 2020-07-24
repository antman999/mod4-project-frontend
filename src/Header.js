import React from 'react'
import './index.css';
import Button from '@material-ui/core/Button';

const Header = () => {
  return (
		<div>
			<header class='masthead'>
				<div class='container h-100'>
					<div class='row h-100 align-items-center'>
						<div class='col-12 text-center'>
							<h1 class='font-weight-bold'>We All Deserve A Second Chance.</h1>
							<Button variant='outlined' size='large' color='#FAE47A'>
								Sign Up
							</Button>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}

export default Header
