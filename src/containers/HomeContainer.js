import React, { Component } from 'react'
import Header from '../Header'
import PetsContainer from './PetsContainer';


export class HomeContainer extends Component {
  render() {
    return (
			<div>
				<Header />
				<PetsContainer />
			</div>
		);
  }
}

export default HomeContainer
