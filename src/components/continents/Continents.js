import React, { useEffect, useState } from 'react';

function Continents() {
    const [continentInfo, setContinentInfo] = useState({});
    console.log({continentInfo})

    /**
	 * Get Continent statistics
	 */
	useEffect(() => {
		fetch('https://disease.sh/v3/covid-19/continents')
			.then(response => response.json())
			.then(data => {
				setContinentInfo(data);
			});
    }, []);

    return (
        <section className="continents">
            <h1>Continents Components</h1>
            {
                continentInfo.map((conti) => (
                    <>
                        <p>{conti.continent}</p>
                        <p>Active: {conti.active}</p>
                        <p>Cases: {conti.cases}</p>
                        <p>Critical: {conti.critical}</p>
                        <p>Deaths: {conti.deaths}</p>
                        <p>Recovered: {conti.recovered}</p>
                        <p>Tests: {conti.tests}</p>
                        <br/>
                        <h1>Todays</h1>
                        <p>Cases: {conti.todayCases}</p>
                        <p>Deaths: {conti.todayDeaths}</p>
                        <p>Recovered: {conti.todayRecovered}</p>
                        <p>LNG/LAT: {conti.continentInfo.long} - {conti.continentInfo.lat}</p>
                        <br/>
                        <hr/>
                        <br/>                        
                    </>
                ))
            }
            
        </section>
    )
}

export default Continents;
