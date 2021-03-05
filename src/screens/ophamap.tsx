import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { MapContainer, TileLayer } from 'react-leaflet';
import Leaflet from 'leaflet';

import '../style/pages/ophan-map.css';

import 'leaflet/dist/leaflet.css';


import mapmark from '../images/mapmark.svg';

function ophaMap() {
    return(
        <div id="page-map">
        <aside>
            <header>
                <img src={mapmark} alt="happy"/>

                <h2>Escolha um orfanato no mapa</h2>
                <p>Muitas crianças estão esperando a sua visita :)</p>
            </header>
            <footer>
                <strong>Bahia</strong>
                <span>Vitória da Conquista</span>
            </footer>
        </aside>

        <MapContainer
        center={[-14.8648, -40.8369]}
        zoom={13}
        style={{ width: '100%', height: '100%'}}
        >
            <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} /> 
        </MapContainer>



        <Link to="/" className="ophaneger-add">
            <FiPlus size={36} color="#fff"/>
        </Link>

    </div>
    );
}

export default ophaMap;