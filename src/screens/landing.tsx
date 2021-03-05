import React from 'react';
import { Link } from 'react-router-dom';

import '../style/global.css';
import '../style/pages/landing.css';
import {FiArrowRight} from 'react-icons/fi';

import logo from "../images/Logo.svg";

function Landing() {
    return(
    <div id="page-landing">
        <div className="content-wrapper">
        <img src={logo} alt=""/>
        <main>
          <h1>Leve Felicidade para o Mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Bahia</strong>
          <span>Vitória da Conquista</span>
        </div>

        <Link to="/map" className="enter-app"> <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/> </Link>

      </div>
    </div>
    );
}

export default Landing;