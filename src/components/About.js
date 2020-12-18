import React from "react";
import YouTubeProject from './YouTubeProject.js';
import { Route, Link } from 'react-router-dom';


function About(props) {
    return (
        <div class="section" id="about-section">
            <div class="section-title">About me</div>

  		    <div class="section-content">
  			    <div class="main" id="about">
                    <Route exact path="/YouTubeProject" component={YouTubeProject}>
                        <YouTubeProject />
                    </Route>

                    <p>
                        I graduated from the University of Toronto in April 2019 and I'm currently looking for another role. I'm mainly interested in Business Intelligence and Data Analysis, and have been taking online courses to advance my own learning. I'm also interested in development roles where I can work with data. <br /><br />
                        I'm currently working on: <Link to='/YouTubeProject'>YouTube History Analyzer</Link>
  				    </p>
  			    </div>
  		    </div>

  	    </div>
    )
}

export default About;
