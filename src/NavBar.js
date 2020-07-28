import React from 'react'
import './index.css';
import { Link } from 'react-router-dom';


const NavBar = (props) => {
  return (
		<div>
			<nav>
				<ul className='nav'>
					<li className='nav-item'>
						<a className='logo' href="/pets">
						PETS
						</a>
					</li>
					<li className='nav-item dropdown'>
						<a
							className='otherNav dropdown-toggle'
							data-toggle='dropdown'
							href='#'
							role='button'
							aria-haspopup='true'
							aria-expanded='false'>
							Type
						</a>
						<div className='dropdown-menu'>
							<a className='dropdown-item' href='#'>
								Dogs
							</a>
							<a className='dropdown-item' href='#'>
								Cats
							</a>
							<a className='dropdown-item' href='#'>
								Birds
							</a>
							<div className='dropdown-divider'></div>
							<a className='dropdown-item' href='#'>
								All other Forever Friends
							</a>
						</div>
					</li>
					<li className='nav-item'>
						<a className='otherNav' href='/create'>
							Found A Pet?
						</a>
					</li>
					<li className='nav-item'>
						<a
							className='otherNav'
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
