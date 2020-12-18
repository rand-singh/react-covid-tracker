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
                continentInfo.map(conti => (
                    <p>{conti.continent}</p>
                ))
            }
            
        </section>
    )
}

export default Continents;
