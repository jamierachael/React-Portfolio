import React from "react";



function PortfolioCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />

            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Project:</strong> {props.project}
                    </li>
                    <li>
                        <strong>Address:</strong> {props.location}
                    </li>
                </ul>
            </div>
            <span className="remove">𝘅</span>
        </div>
    );
}

export default PortfolioCard;
