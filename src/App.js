import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/nav/Nav';
import Worldwide from './components/worldwide/Worldwide';
import Continents from './components/continents/Continents';
import Countries from './components/countries/Countries';
import Vaccine from './components/vaccine/Vaccine';
import About from './components/about/About';

import './App.scss';

function App() {
  	return (
		  <Router>
			  <div className="app">
					<Switch>
						<Route path='/continents'>
							<Nav />
							<Continents />
						</Route>
						
						<Route path='/countries'>
							<Nav />
							<Countries />
						</Route>
						
						<Route path='/vaccine'>
							<Nav />
							<Vaccine />
						</Route>

						<Route path='/about'>
							<Nav />
							<About />
						</Route>

						<Route path="/">
							<Nav />
							<Worldwide />
						</Route>
				  	</Switch>
			  </div>
		  </Router>
  	);
}

export default App;
