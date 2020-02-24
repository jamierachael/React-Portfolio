import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "./Learn";

function Contact(props) {
  return (
    <div>




      <Link to={`${props.match.url}/learn`} role="button" className="btn btn-link bold">
        Learn More
      </Link>{" "}
      <Link to="/contact" role="button" className="btn btn-link bold">
        Learn Less
      </Link>
      <Route exact path={`${props.match.url}/learn`} component={Learn} />
      <div className="contact-card">

        <div className="card">
          <h1 className="text-center">Contact Me</h1>
          <div className="card-content">
            <a href="tel:+7147860736" className="ml-4 mt-4 font-weight-bold">Phone</a>

            <a href="mailto:webmaster@jamie.rachael@gmail.com" className="ml-4 mt-4 font-weight-bold">Email</a>

            <a href="https://www.linkedin.com/in/jamie-rachael-morris/" className="ml-4 mt-4 font-weight-bold">LinkedIn</a>

            <a href="https://github.com/jamierachael" className="ml-4 mt-4 font-weight-bold">GitHub</a>
          </div>
        </div>
      </div >
    </div>
  );
}

export default Contact;
