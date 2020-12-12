import React, { useEffect, useState } from 'react';
import InfoBox from './components/infoBox/InfoBox';
import Map from './components/map/Map';
import Table from './components/table/Table';
import LineGraph from './components/lineGraph/LineGraph';

import { sortData } from './utils/sortData';

import { MenuItem, FormControl, Select, Card, CardContent } from "@material-ui/core";

import "leaflet/dist/leaflet.css";
import './App.scss';

function App() {
	const [countries, setCountries] = useState([]);
	const [country, setCountry] = useState('worldwide');
	const [countryInfo, setCountryInfo] = useState({});
	const [tableData, setTableData] = useState([]);
	const [casesType, setCasesType] = useState("cases");
	const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
	const [mapZoom, setMapZoom] = useState(3);
	const [mapCountries, setMapCountries] = useState([]);

	/**
	 * Get data on initial load only for worldwide
	 */
	useEffect(() => {
		fetch('https://disease.sh/v3/covid-19/all')
			.then(response => response.json())
			.then(data => {
				setCountryInfo(data);
			})
	}, []);

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
					
				let sortedData = sortData(data);
				setTableData(sortedData);
				setMapCountries(data);
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
				setMapCenter(
					{
						lat: data.countryInfo.lat, 
						lng: data.countryInfo.long
					}
				);
				setMapCenter({lat: data.countryInfo.lat, lng: data.countryInfo.long});
				setMapZoom(4);				
			});
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
					<InfoBox isRed active={casesType === "cases"} onClick={e => setCasesType('cases')} title="Coronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases}/>
					<InfoBox active={casesType === "recovered"} onClick={e => setCasesType('recovered')} title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered}/>
					<InfoBox isRed active={casesType === "deaths"} onClick={e => setCasesType('deaths')} title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths} />
				</div>

				<Map countries={mapCountries} casesType={casesType} center={mapCenter} zoom={mapZoom}/>
			</div>

			<div className="app__right">
				<Card className="app__worldStats">
					<CardContent>
						<h3>Cases by Country</h3>
						<Table countries={tableData} />
						
						<h3>Worldwide {casesType}</h3>
						<LineGraph casesType={casesType} />

					</CardContent>
				</Card>
			</div>

    	</div>
  	);
}

export default App;
