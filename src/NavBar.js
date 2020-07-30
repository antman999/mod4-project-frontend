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
							Filter by Type
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
						<a className='otherNav' href='/lost'>
							Found A Pet?
						</a>
					</li>
					<li className='nav-item'>
						<a
							className='otherNav'
							href='/login'
							tabindex='-1'
							aria-disabled='true'>
							{props.user? 'Welcome' + ' ' + props.user.first_name :"Sign Up / Login"}
						</a>
					</li>
					<li className='nav-item'>
						<a className='otherNav' href="/profile_page">
						My Profile
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default NavBar
