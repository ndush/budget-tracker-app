import React from "react";
import background from "../images/background.png";

function Home() {
  return (
    <div
      class="container-fluid"
      style={{
        backgroundColor: "purple",
      }}
    >
      <img src={background} class="img-fluid" alt="fireSpot" />
      <div className="text">
      <h1> <span style={{fontweight:"bold"}}>Budget</span> Simple</h1>
        <p>This budget tracker is a simple app for 
            users to visualize their spending history.
            See what areas of your day-to-day life are consuming
            the most of your resources
        </p>
        </div>
    </div>
  );
}
export default Home;
