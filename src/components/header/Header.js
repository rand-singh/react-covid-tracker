import React, { useEffect, useState } from 'react';
import { MenuItem, FormControl, Select} from "@material-ui/core";
import './Header.scss';

function Header() {
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
    )
}

export default Header;
