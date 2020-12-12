import React, { useEffect, useState } from 'react';
import InfoBox from './components/infoBox/InfoBox';
import Map from './components/map/Map';

import { MenuItem, FormControl, Select, Card, CardContent, Typography } from "@material-ui/core";

import './App.scss';

function App() {
	const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState('worldwide');

    /**
     * Get COVID-19 totals for all countries
     */
    useEffect(() => {
        const getAllCountries = async () => {
            await fetch('https://disease.sh/v3/covid-19/countries')                    
                .then((response) => response.json())
                .then((data) => {
                    const countries = data.map((country) => (
                        {
                            id: country.countryInfo._id,
                            name: country.country,
                            value: country.countryInfo.iso2
                        }
                    ));

                setCountries(countries);
            });
        };
        
        getAllCountries();
    }, []);

    /**
     * 
     * @param {object} e 
     */
    const onCountryChange = (e) => {
        const countryCode = e.target.value;
        setCountry(countryCode);
	};
	
  	return (
    	<div className="app">
			<div className="app__left">
				<div className="app__header">
					<h1>Covid-19 Tracker</h1>
					
					<FormControl className="app__dropdown">
						<Select variant="outlined" value={country} onChange={onCountryChange}>
							<MenuItem value="worldwide">Worldwide</MenuItem>
							{countries.map((country) => (
								<MenuItem key={country.name} value={country.value}>{country.name}</MenuItem>
							))}
						</Select>
					</FormControl>
				</div>

				<div className="app__stats">
					<InfoBox title="Coronavirus Cases" cases={123} total={2000}/>
					<InfoBox title="Recovered" cases={345} total={3000}/>
					<InfoBox title="Deaths" cases={456} total={4000} />
				</div>

				<Map />
			</div>

			<div className="app__right">
				<Card>
					<CardContent>
						<h3>Cases by Country</h3>
						
						<h3>Worldwide new cases</h3>

					</CardContent>
				</Card>
			</div>

    	</div>
  	);
}

export default App;
