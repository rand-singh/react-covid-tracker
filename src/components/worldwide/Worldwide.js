import React, { useEffect, useState } from 'react';
import InfoBox from '../infoBox/InfoBox';
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
        <section className="container worldwide">            
            <code>Updated: <time>{moment(updated).fromNow()}</time></code>

            <h1>Todays Worldwide Stats</h1>
            <section className="stats">
                <InfoBox title="Cases" cases={todayCases} isRed />
                <InfoBox title="Deaths" cases={todayDeaths} isRed />
                <InfoBox title="Recovered" cases={todayRecovered} />
            </section>

            <h1>Worldwide Stats</h1>
            <section className="stats">
                <InfoBox title="Cases" cases={cases} isRed />
                <InfoBox title="Active" cases={active} isRed />
                <InfoBox title="Deaths" cases={deaths} isRed />
                <InfoBox title="Recovered" cases={recovered} />
                <InfoBox title="Tests" cases={tests} />
            </section>
        </section>
    )
}

export default Worldwide;
