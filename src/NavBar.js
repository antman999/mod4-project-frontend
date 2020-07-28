import React from 'react'
import './index.css';
import { Link } from 'react-router-dom';


const NavBar = (props) => {
  return (
		<div>
			<nav>
				<ul className='nav justify-content-center'>
					<li className='nav-item'>
						<a className='nav-link active' href="/pets">
							All Our Pets
						</a>
					</li>
					<li className='nav-item dropdown'>
						<a
							className='nav-link dropdown-toggle'
							data-toggle='dropdown'
							href='#'
							role='button'
							aria-haspopup='true'
							aria-expanded='false'>
							Type
						</a>
						<div class='dropdown-menu'>
							<a onClick={props.filterHandler} class='dropdown-item' name="dogs">
								Dogs
							</a>
							<a onClick={props.filterHandler} class='dropdown-item' name="cats">
								Cats
							</a>
							{/* <a onClick={props.filterHandler} class='dropdown-item' name="birds">
								Birds
							</a> */}
							<div class='dropdown-divider'></div>
							<a onClick={props.filterHandler} class='dropdown-item' name="all" >
								All Forever Friends
							</a>
						</div>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='/create'>
							Found A Pet?
						</a>
					</li>
					<li className='nav-item'>
						<a
							className='nav-link disabled'
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
