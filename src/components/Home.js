import React from "react";

// import background from "../images/background.png";

function Home() {
  return (
    <div className="home">
      {/* <img src={background} class="img-fluid" alt="fireSpot" /> */}
      <div className="text">
      <h1> <span style={{fontweight:"bold", color:"white"}}>Budget</span> <span style={{fontweight:"bold", color:"purple"}}>Simple</span></h1>
        <p>This budget tracker is a simple app for 
            users to visualize their spending history.
            See what areas of your day-to-day life are consuming
            the most of your resources
        </p>
        <div className='text-center p-3' style={{ backgroundColor: 'purple', marginTop:56+"vh"}}>
        © 2022 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
              Damaris
        </a>
      </div>
        </div>
        
    </div>
    
  );
}
export default Home;
