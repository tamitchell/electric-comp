import React, { Component } from 'react'
import Header from './Header'
import Projects from './Projects'
import FundedWork from './FundedWork'

export default class Experience extends Component {
    render() {
        return (
            <div className="experience-container">
                <Header/>
                <Projects/>
                <FundedWork/>
            </div>
        )
    }
}
