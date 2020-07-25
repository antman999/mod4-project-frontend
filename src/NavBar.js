import React from 'react'
import './index.css';
import { Link } from 'react-router-dom';


const NavBar = (props) => {
  return (
		<div>
			<nav>
				<ul class='nav justify-content-center'>
					<li class='nav-item'>
						<a class='nav-link active' href="/pets">
							All Our Pets
						</a>
					</li>
					<li class='nav-item dropdown'>
						<a
							class='nav-link dropdown-toggle'
							data-toggle='dropdown'
							href='#'
							role='button'
							aria-haspopup='true'
							aria-expanded='false'>
							Type
						</a>
						<div class='dropdown-menu'>
							<a class='dropdown-item' href='#'>
								Dogs
							</a>
							<a class='dropdown-item' href='#'>
								Cats
							</a>
							<a class='dropdown-item' href='#'>
								Birds
							</a>
							<div class='dropdown-divider'></div>
							<a class='dropdown-item' href='#'>
								All other Forever Friends
							</a>
						</div>
					</li>
					<li class='nav-item'>
						<a class='nav-link' href='/create'>
							Found A Pet?
						</a>
					</li>
					<li class='nav-item'>
						<a
							class='nav-link disabled'
							href='/login'
							tabindex='-1'
							aria-disabled='true'>
							Sign Up / Login
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default NavBar
