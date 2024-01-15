import React from "react";
import facebook from "../assets/images/icon-facebook.svg";
import youtube from "../assets/images/icon-youtube.svg";
import twitter from "../assets/images/icon-twitter.svg";
import instagram from "../assets/images/icon-instagram.svg";

function Layout1() {
   const data = [
    {
        id:1, 
        src:<img src={facebook} alt='Social' loading='lazy' />, 

        name:"@nathanf", 
        followers:'1987', 
        today:'12'
    },
    {
        id:2, 
        src:<img src={twitter} alt='Social' loading='lazy' />, 
        name:"@nathanf", 
        followers:'1044', 
        today:'99'
    },
    {
        id:3, 
        src:<img src={instagram} alt='Social' loading='lazy' />, 
        name:"@realnathanf", 
        followers:'11k', 
        today:'1099'
    },
    {
        id:4, 
        src:<img src={youtube} alt='Social' loading='lazy' />, 
        name:"Nathan F.", 
        followers:' 8239', 
        today:'144'
    }
   ]


  return (
    <div className="Layout1">
      <div className="heading1">
        <div className="left">
          <h1> Social Media Dashboard</h1>
          <h4>Total Followers: 23,004</h4>
        </div>
        <div className="right">
          <p>Dark Mode</p>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider"></span>
          </label>
        </div>
      </div>
      <container>
       {
        data.map( (d) =>{ 
            return  <div className={`card ${ d.id === 1 ? 'instagram' : ''}`} key={d.id}>
              <div className="platform">
                <p>{d.src}</p>
                <h4>{d.name}</h4>
              </div>
              <div className="followers">
                <h5>
                  <span> {d.followers} <br /></span>
                  Followers
                </h5>
              </div>
              <div className="today">
                <h6> {d.today} Today</h6>
              </div>
            </div>
        })
        
    }
      
      </container>
      
    </div>
  );
}

export default Layout1;
