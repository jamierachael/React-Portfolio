import React from "react";


function AboutCard() {
    return (
        <div>

            {/* start copy paste  */}
            <div className="card about-card">
                {/* <img src="../../assets/pano-dam.jpg" className="card-img-top" alt="Profile" /> */}
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>

                <div className="card-body">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
            {/* end copy paste  */}
        </div>
    );
}

export default AboutCard;
