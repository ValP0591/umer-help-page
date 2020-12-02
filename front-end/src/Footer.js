import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'



function Footer () {
    return (
        <footer className="py-5">
          <div className="innerFooter">
            <div className="row">
              <div className="icon">
                <a href="tel:+79044956525"><FontAwesomeIcon icon={faPhone} /></a>
              </div>
              <div className="icon">
                <a className="social_media_icons" href="https://instagram.com/dynasty_funeral_home"><FontAwesomeIcon icon={faInstagram} /></a>
              </div>
            </div>
          </div>
        </footer>
    );
}

export default Footer