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
        </div>
    </div>
  );
}
export default Home;
