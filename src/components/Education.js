import React from "react"
import UofTLogo from '../../pics/UofTLogo.jpg'
import LinkedInLogo from '../../pics/LinkedInLogo.jpg'

function Education(props) {
    return (
        <div class="section" id="education-section">
            <div class="section-title">Education</div>

            <div class="education mobile-padding">
                <div class="main">
                    <a href="https://www.utoronto.ca/" target="_blank" rel="noopener noreferrer">
                        <img src={UofTLogo} alt="University of Toronto" width="200px"/>
                    </a>
                    <p>
                        September 2014 - April 2019<br />
                        Honours Bachelor of Science<br />
                        Major in Computer Science and Statistics with Minor in Genetics
                    </p>
                </div>
            </div>

            <div class="education mobile-padding">
                <div class="main">
                    <a href="https://www.linkedin.com/in/jerry-huang1/" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedInLogo} alt="LinkedIn" width="200px"/>
                    </a>
                    <ul>
                        <li>Advanced Google Analytics</li>
                        <li>Advanced Microsoft Power BI</li>
                        <li>Data Analytics for Business Professionals</li>
                        <li>Python for Data Science Essential Training</li>
                        <li>Tableau Essential Training</li>
                    </ul>
                </div>
            </div>


  	    </div>
    )
}

export default Education;
