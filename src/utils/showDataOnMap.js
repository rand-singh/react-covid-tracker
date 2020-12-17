import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

const casesTypeColors = {
    cases: {
        hex: "#CC1034",
        multiplier: 400,
    },
    recovered: {
        hex: "#7dd71d",
        multiplier: 600,
    },
    deaths: {
        hex: "#fb4443",
        multiplier: 1000,
    },
  }

/**
 * Draw circles on the map with 
 * interactive tooltips
 * 
 * @param {*} data 
 * @param {*} casesType 
 */
export const showDataOnMap = (data, casesType="cases") => (
    data.map(country => (
        <Circle
            key={country.country + country.continent}
            center={[country.countryInfo.lat, country.countryInfo.long]}
            fillOpacity={0.4}
            color={casesTypeColors[casesType].hex}
            fillColor={casesTypeColors[casesType].hex}
            radius={
                Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
            }
        >            
            <Popup>
                <div className="infoContainer">
                    <div className="infoContainer__flag">
                        <img src={country.countryInfo.flag} alt={country.country + " flag"} />
                    </div>
                    <div className="infoContainer__name">{country.country}</div>
                    <div className="infoContainer__confirmed">Cases: {numeral(country.cases).format("0,0")}</div>
                    <div className="infoContainer__recovered">Recovered: {numeral(country.recovered).format("0,0")}</div>
                    <div className="infoContainer__deaths">deaths: {numeral(country.deaths).format("0,0")}</div>
                </div>

            </Popup>
        </Circle>
    ))
);
