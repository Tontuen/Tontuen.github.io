import React from "react";
import YouTubeProject from './YouTubeProject.js';
import { Route, Link } from 'react-router-dom';


function About() {
    return (
        <div class="section" id="about-section">
            <div class="section-title">About me</div>

  		    <div class="section-content">
  			    <div class="main" id="about">
                    <Route exact path="/YouTubeProject" component={YouTubeProject}>
                        <YouTubeProject />
                    </Route>

                    <p>
                        I am a recent graduate from the University of Toronto with a Major in Computer Science and Statistics with a Minor in Molecular Biology. I'm interested in Business Intelligence and Data Analysis, and have been taking online courses to advance my own learning. I'm also interested in development roles where I can work with data. <br /><br />

                        I'm currently working on: <Link to='/YouTubeProject'>YouTube History Analyzer</Link>
  				    </p>

                    <h1>Skills</h1>
                    <p>
                        Experienced in all stages of business intelligence and software development. <br />
                        <b>Data Analysis:</b> SQL, Python, Power BI, Google Analytics, Tableau <br />
                        <b>Software (Back-end):</b> SQL, Python, Rest API, Oracle DB, MongoDB <br />
                        <b>Software (Front-end):</b> JavaScript, React, GraphQL, HTML, CSS <br />
                        <b>General:</b> Business Intelligence, Data Analysis, Systems Design, Software Development

                    </p>
  			    </div>
  		    </div>

  	    </div>
    )
}

export default About;
