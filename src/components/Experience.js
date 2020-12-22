import React from "react"
import nferenceLogo from '../../pics/nferenceLogo.svg'
import YorkRegionLogo from '../../pics/YorkRegionLogo.png'
import TutorDoctorLogo from '../../pics/TutorDoctorLogo.png'
import PEYFinalEvaluation from '../../files/PEY Final Evaluation.pdf'
import resume from '../../files/Jerry_Huang_Resume.pdf'

function Experience(props) {
    return (
        <div class="section" id="experience-section">
            <div class="section-title">Experience</div>

            <div class="section-content">
                <a href={resume} download="Jerry_Huang_Resume">View Full Resume</a>

                <div class="work mobile-padding">
                    <div class="main">
                        <a href="https://nference.ai/" target="_blank" rel="noopener noreferrer">
                            <img src={nferenceLogo} alt="nference Canada" width="200px"/>
                        </a>
                        <p>
                            September 2, 2019 - November 29, 2019<br />
                            Software Developer (3 month contract)<br /><br />
                            Designed full stack applications and performed text data analysis for pharmaceutical companies and research hospitals
                        </p>

                        <ul>
                            <li>Developed the front-end and back-end for web apps using React, GraphQL, and Python that are currently being used by pharmaceutical companies and american research hospitals</li>
                            <li>Designed Python code to extract and analyze text from research papers and excel files to create text corpora for natural language processing models</li>
                            <li>Analyzed text data to detect inconsistencies, anomalies, and false records between researchers conducting clinical trials</li>
                        </ul>
                    </div>
                </div>

                <div class="work mobile-padding">
                    <div class="main">
                        <a href="https://www.york.ca/" target="_blank" rel="noopener noreferrer">
                            <img src={YorkRegionLogo} alt="York Region" width="200px"/>
                        </a>
                        <p>
                            September 4, 2017 - August 31, 2018<br />
                            Business Intelligence Intern (1 year internship) | <a href={PEYFinalEvaluation} target="_blank" rel="noopener noreferrer">Final Evaluation</a>
                            <br /><br />

                            Worked with the Business Operations and Data Management team to build data driven solutions and business intelligence apps using SQL, JavaScript, and Oracle APEX.
                        </p>

                        <ul>
                            <li>Implemented systems for process automation and data management using SQL and Oracle APEX, resulting in cumulative annual savings of over $100,000 in labor</li>
                            <li>Coordinated the development of a proof of concept app which analyzed and forecasted energy and water/wastewater consumption which lead to the creation of a $1,000,000 project</li>
                            <li>Optimized report generation time of multiple high priority reports by 400x (5days to 5mins) through the development of business intelligence tools and data management strategies</li>
                            <li>Consulted directly with clients to gather and translate requirements, develop data-driven solutions with ad hoc data analysis, and support existing products</li>
                        </ul>
                    </div>
                </div>

                <div class="work mobile-padding">
                    <div class="main">
                        <a href="https://www.tutordoctor.com/" target="_blank" rel="noopener noreferrer">
                            <img src={TutorDoctorLogo} alt="Tutor Doctor" width="200px"/>
                        </a>
                        <p>
                            October 2016 - April 2017<br />
                            Math Tutor <br /><br />
                            Taught math at various grade levels and identified and addressed student weaknesses
                        </p>

                        <ul>
                            <li>Reinforced students learning methods and weaknesses in different topics; test scores increased by 15%</li>
                            <li>Adapted teaching style in response to student weaknesses; homework completion time decreased by 20%</li>
                            <li>Advised parents on effective teaching and learning styles; final grades increased by 10%</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience;
