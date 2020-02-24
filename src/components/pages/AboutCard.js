import React from "react";


function AboutCard() {
    return (
        <div className="about-container">

            <img src="../../assets/Profile-2019.png"></img>
            <div>

                <div>
                    <h5>About Me</h5>
                    <p>I am a Fullstack Developer and administrative professional
                                                with 8+ years
                                                of
                                                experience in various sectors.</p>
                    <p>Recognized for demonstrating independent discipline,
                                                flexibility, and a
                                                customer-oriented attitude, I
                                                have a verifiable history of contributing directly to company growth and
                                                expansion throughout my career.
                                                Professional focal points include sales, scheduling, data entry, web
                                                formatting, proofreading/editing,
                                                social media marketing, content management, cross-functional team
                                                leadership, complex problem-solving,
                                                and client relationship management.</p>

                    <p>
                        I am interested in learning about new opportunities and can
                        be reached
                        through this portfolio, by
                        email:
                                                <a href="mailto:jamie.rachael@gmail.com"
                            target="_blank">jamie.rachael@gmail.com, </a> through<a
                                href="https://github.com/jamierachael"> GitHub</a>, or through <a
                                    href="https://www.linkedin.com/in/jamie-rachael-morris/">
                            LinkedIn.</a>
                        Cheers!

                                                </p>
                </div>

                <div className="card-body">
                    <a href="https://www.linkedin.com/in/jamie-rachael-morris/" className="card-link">LinkedIn</a>
                    <a href="https://github.com/jamierachael" className="card-link">GitHub</a>
                </div>
            </div>
            {/* end copy paste  */}
        </div>
    );
}

export default AboutCard;
