import React from 'react';
import './Table.scss';
import numeral from "numeral";

function Table({ countries }) {
    return (
        <div className="table">
            <table>
                <tbody>
                    {countries.map(({country, cases, countryInfo}) => (
                        <tr key={country}>
                            <td>{country}</td>
                            <td>{numeral(cases).format("0,0")}</td>
                        </tr>
                    ))}
                </tbody>
            </table>      
        </div>
    )
}

export default Table;
