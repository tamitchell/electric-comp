import React from 'react'
import {Link} from 'react-router-dom'
import { constants } from '../constants';


const Header = () => {
    return (
        <div className="header-container">
            <h1>Past Work Projects</h1>
            <p className="subtitle">{constants.OUR_PARTNERS}</p>
            <div className="pretend-footer">
                <p>Learn more about <Link to="/services">Our Services</Link> </p>
            </div>
        </div>
    )
}

export default Header
