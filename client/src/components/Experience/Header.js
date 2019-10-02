import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className="header-container">
            <h1>Past Work Projects</h1>
            <p className="subtitle">We work closely with Rexel, Dominion Electric, and Maurice Electrical Company to supply and address all our customers’ requirements and needs.</p>
            <div className="pretend-footer">
                <p>Learn more about <Link to="/services">Our Services</Link> </p>
            </div>
        </div>
    )
}

export default Header
