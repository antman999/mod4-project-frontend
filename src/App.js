import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomeContainer from './containers/HomeContainer';

function App() {
  return (
    <div>
      <Router>
     					<Route
						path='/'
						render={routerProps => (
							<HomeContainer
						
								{...routerProps}
							
							/>
						)}
					/>
   </Router>
    </div>
  );
}

export default App;


