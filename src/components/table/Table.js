import React from 'react';
import './Table.scss';

function Table({ countries }) {
    console.log(countries);

    return (
        <div className="table">
            {countries.map(({country, cases}) => (
                <tr>
                    <td>{country}</td>
                    <td>{cases}</td>
                </tr>
            ))}            
        </div>
    )
}

export default Table
