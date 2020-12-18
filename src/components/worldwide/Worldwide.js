import React, { useEffect, useState } from 'react';
import './Worldwide.scss';
import moment from 'moment';
import { prettyPrintStat } from '../../utils/prettyPrintStat';

function Worldwide() {
    const [{updated, active, cases, deaths, recovered, tests, todayCases, todayDeaths, todayRecovered}, setWorldwideInfo] = useState({});
    
    // console.log(moment(updated).fromNow());

    /**
	 * Get Global statistics
	 */
	useEffect(() => {
		fetch('https://disease.sh/v3/covid-19/all')
			.then(response => response.json())
			.then(data => {
				setWorldwideInfo(data);
			});
    }, []);
    
    return (
        <section className="worldwide">
            <h1>Worldwide stats</h1>
            <br/>
            <code>Last updated on: <time> { new Date(updated).toUTCString() }</time></code>
            <br/>
            <code>Updated: <time>{moment(updated).fromNow()}</time></code>
            <br/><br/>
            <p>Active worldwide cases {prettyPrintStat(active)}</p>
            <p>Recorded worldwide cases {cases}</p>
            <p>Worldwide deaths {deaths}</p>
            <p>Recovered {recovered}</p>
            <p>Worldwide tests {tests}</p>

            <br/>
            <h1>Todays Worldwide stats</h1>
            <p>Cases {todayCases}</p>    
            <p>Deaths {todayDeaths}</p>    
            <p>Recovered {todayRecovered}</p>
        </section>
    )
}

export default Worldwide;
