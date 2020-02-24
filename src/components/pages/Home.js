import React from "react";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <div className="row">
        <div className="col-4">


        </div>
        <div className="col-4">

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Full Stack Web developer</h5>
              <p className="card-text">Offering a variety of services and professional support.</p>
              {/* <img src="../assets/blue-crop.jpg"> </img> */}
              {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
              <a href="https://www.linkedin.com/in/jamie-rachael-morris/" className="ml-5">LinkedIn</a>
              <a href="https://github.com/jamierachael" className="ml-5">Github</a>
            </div>
          </div>

        </div>

        <div className="col-4">


        </div>

      </div>

    </div>

  );
}

export default Home;
