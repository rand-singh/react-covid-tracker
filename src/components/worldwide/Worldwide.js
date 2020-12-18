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
            <p>Recorded worldwide cases {prettyPrintStat(cases)}</p>
            <p>Active worldwide cases {prettyPrintStat(active)}</p>
            <p>Worldwide deaths {prettyPrintStat(deaths)}</p>
            <p>Recovered {prettyPrintStat(recovered)}</p>
            <p>Worldwide tests {prettyPrintStat(tests)}</p>

            <br/>
            <h1>Todays Worldwide stats</h1>
            <p>Cases {prettyPrintStat(todayCases)}</p>    
            <p>Deaths {prettyPrintStat(todayDeaths)}</p>    
            <p>Recovered {prettyPrintStat(todayRecovered)}</p>
        </section>
    )
}

export default Worldwide;
