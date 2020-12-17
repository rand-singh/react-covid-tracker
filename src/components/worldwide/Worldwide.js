import React, { useEffect, useState } from 'react';


function Worldwide() {
    const [{updated, active, cases, deaths, recovered, tests, todayCases, todayDeaths, todayRecovered}, setWorldwideInfo] = useState({});
    
    console.log(updated)
    /**
	 * Get global statistics
	 */
	useEffect(() => {
		fetch('https://disease.sh/v3/covid-19/all')
			.then(response => response.json())
			.then(data => {
				setWorldwideInfo(data);
			});
    }, []);
    
    return (
        <div className="worldwide">
            <code>Last updated on: { new Date(updated).toUTCString() }</code>

            <h1>Worldwide stats</h1>
            <p>Active worldwide cases {active}</p>
            <p>Recorded worldwide cases {cases}</p>
            <p>Worldwide deaths {deaths}</p>
            <p>Recovered {recovered}</p>
            <p>Worldwide tests {tests}</p>

            <h1>Todays Wordlwide stats</h1>
            <p>Cases {todayCases}</p>    
            <p>Deaths {todayDeaths}</p>    
            <p>Recovered {todayRecovered}</p>

        </div>
    )
}

export default Worldwide;
