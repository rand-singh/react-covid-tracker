import React, { useEffect, useState } from 'react';
import InfoBox from './components/infoBox/InfoBox';
import Map from './components/map/Map';
import Table from './components/table/Table';

import { MenuItem, FormControl, Select, Card, CardContent } from "@material-ui/core";

import './App.scss';

function App() {
	const [countries, setCountries] = useState([]);
	const [country, setCountry] = useState('worldwide');
	const [countryInfo, setCountryInfo] = useState({});
	const [tableData, setTableData] = useState([])

	/**
	 * Get data on initial load only for worldwide
	 */
	useEffect(() => {
		fetch('https://disease.sh/v3/covid-19/all')
			.then(response => response.json())
			.then(data => {
				setCountryInfo(data);
			})
	}, [])

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
					
				setTableData(data);
                setCountries(countries);
            });
        };
        
        getAllCountries();
    }, []);

    /**
     * 
     * @param {object} e 
     */
    const onCountryChange = async (e) => {
        const countryCode = e.target.value;
		
		const url = 
			countryCode === 'worldwide' 
			? 'https://disease.sh/v3/covid-19/all' 
			: `https://disease.sh/v3/covid-19/countries/${countryCode}`
		
		await fetch(url)
			.then(response => response.json())
			.then(data => {
				setCountry(countryCode);
				setCountryInfo(data);
			});
	};

	console.log({countryInfo});
	
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
					<InfoBox title="Coronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases}/>
					<InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered}/>
					<InfoBox title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths} />
				</div>

				<Map />
			</div>

			<div className="app__right">
				<Card>
					<CardContent>
						<h3>Cases by Country</h3>
						<Table countries={tableData} />
						
						<h3>Worldwide new cases</h3>

					</CardContent>
				</Card>
			</div>

    	</div>
  	);
}

export default App;
