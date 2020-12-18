import React from "react"
import YouTubeProject from './YouTubeProject.js'
import { Route, Link } from 'react-router-dom';

function Education(props) {
    return (
        <div class="section" id="projects-section">
            <div class="section-title">Personal Projects</div>

            <div class="projects mobile-padding">
                <div class="main">
                    <Route exact path="/YouTubeProject" component={YouTubeProject}>
                        <YouTubeProject />
                    </Route>
                    <Link to='/YouTubeProject'>YouTube History Analyzer</Link>

                    <p>
                        Designed Python code to categorize YouTube watch history data using the YouTube
                        Data API and used Power BI for data visualizations.
                    </p>
                </div>
            </div>

  	    </div>
    )
}

export default Education;
