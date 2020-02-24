import React from "react";
import PortfolioCard from "../PortfolioCard";
import friends from "../../assets/friends.json";


function Blog() {
  return (
    <div>
      <h1>Portfolio Page</h1>


      <div className="container">
        <h1 className="title">Projects List</h1>
        <div className="row">
          <PortfolioCard
            name={friends[0].name}
            image={friends[0].image}
            project={friends[0].project}
            location={friends[0].location}
          />
          <PortfolioCard
            name={friends[1].name}
            image={friends[1].image}
            project={friends[1].project}
            location={friends[1].location}
          />
        </div>
        <div className="row">
          <PortfolioCard
            name={friends[2].name}
            image={friends[2].image}
            project={friends[2].project}
            location={friends[2].location}
          />

          <PortfolioCard
            name={friends[3].name}
            image={friends[3].image}
            project={friends[3].project}
            location={friends[3].location}
          />
        </div>

        <div className="row">

          <PortfolioCard
            name={friends[4].name}
            image={friends[4].image}
            project={friends[4].project}
            location={friends[4].location}
          />

          <PortfolioCard
            name={friends[5].name}
            image={friends[5].image}
            project={friends[5].project}
            location={friends[5].location}
          />

        </div>
      </div>



    </div >
  );
}

export default Blog;
