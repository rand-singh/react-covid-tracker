import React from 'react';
import './Map.scss';
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { showDataOnMap } from '../../utils/showDataOnMap';

function Map({countries, casesType, center, zoom}) {
    return (
        <>        
            <div className="map">
                <LeafletMap center={center} zoom={zoom}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {showDataOnMap(countries, casesType)}
                </LeafletMap>
            </div>
        </>
    )
}

export default Map;
