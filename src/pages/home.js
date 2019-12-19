import React from 'react';
import '../css/home.css';
import sunshine from '../imgs/sunshine-logo.jpg';
import beer from '../imgs/beer.jpeg';
import ocean from '../imgs/ocean.jpg';
import pool from '../imgs/pool.jpeg';
import happy from '../imgs/happy.jpeg';


function Home() {
  return (
    <div className="home">
      <div className="content-wrap">
        <div className="logo_container">
          <img src={sunshine} alt="Sunshine Company Logo" />
        </div>
        <div className="home_info">
          <div className="div_container">
            <div className="info_img">
              <img src={beer} alt="Glass of beer" />
            </div>
            <div className="info_text">
              <p>Over 100 Beers with 33 on Draft</p>
            </div>
          </div>
          <div className="div_container">
            <div className="info_text">
              <p>Ocean View Deck </p>
            </div>
            <div className="info_img">
              <img src={ocean} alt="Ocean View" />
            </div>
          </div>
          <div className="div_container">
            <div className="info_img">
              <img src={pool} alt="Pool Table" />
            </div>
            <div className="info_text">
              <p>Pool Tables </p>
            </div>
          </div>
          <div className="div_container">
            <div className="info_text">
              <p>Happy Hour 5-6pm daily</p>
            </div>
            <div className="info_img">
              <img src={happy} alt="Happy People" />
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default Home;