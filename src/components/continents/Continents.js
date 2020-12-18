import React, { useEffect, useState } from 'react';
import moment from 'moment';

function Continents() {
    const [continentInfo, setContinentInfo] = useState([]);
    console.log(Array.isArray(continentInfo));

    /**
	 * Get Continent statistics
	 */
	useEffect(() => {
        const getAllContinents = async () => {
            await fetch('https://disease.sh/v3/covid-19/continents')
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setContinentInfo(data);
                });            
        };

        getAllContinents();
    }, []);

    return (
        <section className="continents">
            <h1>Continents Components</h1>
            
            {continentInfo.map((c) => (
                <div key={c.continent}>
                    <br/>
                    <code>Last updated on: <time> { new Date(c.updated).toUTCString() }</time></code>
                    <br/>
                    <code>Updated: <time>{moment(c.updated).fromNow()}</time></code>
                    <p>{c.continent}</p>
                    <p>LNG/LAT: {c.continentInfo.long} - {c.continentInfo.lat}</p>

                    <p>Active: {c.active}</p>
                    <p>Cases: {c.cases}</p>
                    <p>Critical: {c.critical}</p>
                    <p>Deaths: {c.deaths}</p>
                    <p>Recovered: {c.recovered}</p>
                    <p>Tests: {c.tests}</p>
                    <br/>
                    <h1>Todays</h1>
                    <p>Cases: {c.todayCases}</p>
                    <p>Deaths: {c.todayDeaths}</p>
                    <p>Recovered: {c.todayRecovered}</p>
                    <br/>
                    <hr/>
                    <br/>                        
                </div>
                ))
            }
            
        </section>
    )
}

export default Continents;
