import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './About.js';
import Experience from './Experience.js';
import Education from './Education.js'
import Projects from './Projects.js'
import YouTubeProject from './YouTubeProject.js'
import '../App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Route exact path="/">
                    <About />
                    <Experience />
                    <Education />
                    <Projects />
                </Route>
                <Route exact path="/YouTubeProject" component={YouTubeProject}>
                    <YouTubeProject />
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
