import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import './Landing.css'
import sample from './images/sampleExpresume.png'

function Home(props)
{

  

    return (
    <div style={{height:"2000px"}}>
      <div className="topArea">
        <div className="topLeftArea">
        <h1 className="slideInRight"style={{color:"white",padding:"2rem",textAlign:"left"}}>Building Human To Human <br></br>Connections.<span className='flash'> |</span></h1>
        <h3 style={{textAlign:'left' ,color:"white",marginLeft:"2rem"}}>Helping Young PeopleJoin The WorkForce With A<br></br>Resume Service That Makes It Easer To Land That<br></br>Interview.</h3>
        <button style={{float:'left',marginLeft:"2rem",marginTop:"4rem",background: "linear-gradient(to right, #349de3,  #37119d)"}}><h3>Join The Waitlist!</h3></button>
       
        
 
        </div>
        <div className="topRightArea">
         
        </div>
      </div>

      <div className="middleArea" style={{paddingTop:"3rem"}}>
      <div style={{float:"right"}}className="middleRightArea"  >
        <h1 style={{color:"#3a0ba3",textAlign:"left"}}>Ever Felt Like You Needed To "Crack<br></br>The Code" When Submitting Your<br></br>Resume?</h1>
        <h3 style={{color:"#3a0ba3", textAlign:'left',paddingTop:"2rem",paddingBottom:"2rem"}}>Your Job Search Is Stressful Enough, And Landing That First Interview<br></br>Can Feel Like A Struggle.</h3>
        <p style={{textAlign:"left",fontSize:"1.2rem",color:"#3a0ba3"}}> You keep scanning job descriptions, looking for the right keywords and phrases to include in your<br></br>resume, hoping you get it right so you can get noticed by the tracking system or HR team.<br></br>
          But we all know it is a numbers game, and spending all of this time personalizing your resume<br></br>for every job you apply for is time-consuming.
        </p>
            </div>
        <div className="middleLeftArea">
        
          </div>
          
      </div>   
      <svg id="visual" viewBox="0 0 1920 400" width="1920" height="400" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-v-6c7cbdae="">
        <path d="M0 101L45.7 108.8C91.3 116.7 182.7 132.3 274.2 142.7C365.7 153 457.3 158 548.8 148.5C640.3 139 731.7 115 823 116.7C914.3 118.3 1005.7 145.7 1097 147.7C1188.3 149.7 1279.7 126.3 1371.2 127.7C1462.7 129 1554.3 155 1645.8 151C1737.3 147 1828.7 113 1874.3 96L1920 79L1920 401L1874.3 401C1828.7 401 1737.3 401 1645.8 401C1554.3 401 1462.7 401 1371.2 401C1279.7 401 1188.3 401 1097 401C1005.7 401 914.3 401 823 401C731.7 401 640.3 401 548.8 401C457.3 401 365.7 401 274.2 401C182.7 401 91.3 401 45.7 401L0 401Z" fill="#3a0ca3">
          </path>
          <path d="M0 195L45.7 193C91.3 191 182.7 187 274.2 181C365.7 175 457.3 167 548.8 169.8C640.3 172.7 731.7 186.3 823 194.2C914.3 202 1005.7 204 1097 202.7C1188.3 201.3 1279.7 196.7 1371.2 199C1462.7 201.3 1554.3 210.7 1645.8 202.7C1737.3 194.7 1828.7 169.3 1874.3 156.7L1920 144L1920 401L1874.3 401C1828.7 401 1737.3 401 1645.8 401C1554.3 401 1462.7 401 1371.2 401C1279.7 401 1188.3 401 1097 401C1005.7 401 914.3 401 823 401C731.7 401 640.3 401 548.8 401C457.3 401 365.7 401 274.2 401C182.7 401 91.3 401 45.7 401L0 401Z" fill="#2140c0"></path>
          <path d="M0 172L45.7 171.8C91.3 171.7 182.7 171.3 274.2 179.2C365.7 187 457.3 203 548.8 206.2C640.3 209.3 731.7 199.7 823 196C914.3 192.3 1005.7 194.7 1097 197.5C1188.3 200.3 1279.7 203.7 1371.2 199.2C1462.7 194.7 1554.3 182.3 1645.8 180.3C1737.3 178.3 1828.7 186.7 1874.3 190.8L1920 195L1920 401L1874.3 401C1828.7 401 1737.3 401 1645.8 401C1554.3 401 1462.7 401 1371.2 401C1279.7 401 1188.3 401 1097 401C1005.7 401 914.3 401 823 401C731.7 401 640.3 401 548.8 401C457.3 401 365.7 401 274.2 401C182.7 401 91.3 401 45.7 401L0 401Z" fill="#0064d6"></path>
          <path d="M0 215L45.7 228.5C91.3 242 182.7 269 274.2 279.3C365.7 289.7 457.3 283.3 548.8 273C640.3 262.7 731.7 248.3 823 238.8C914.3 229.3 1005.7 224.7 1097 229.5C1188.3 234.3 1279.7 248.7 1371.2 247.7C1462.7 246.7 1554.3 230.3 1645.8 232.3C1737.3 234.3 1828.7 254.7 1874.3 264.8L1920 275L1920 401L1874.3 401C1828.7 401 1737.3 401 1645.8 401C1554.3 401 1462.7 401 1371.2 401C1279.7 401 1188.3 401 1097 401C1005.7 401 914.3 401 823 401C731.7 401 640.3 401 548.8 401C457.3 401 365.7 401 274.2 401C182.7 401 91.3 401 45.7 401L0 401Z" fill="#0085e6"></path>
          <path d="M0 280L45.7 284.7C91.3 289.3 182.7 298.7 274.2 307.3C365.7 316 457.3 324 548.8 321.5C640.3 319 731.7 306 823 305.7C914.3 305.3 1005.7 317.7 1097 320C1188.3 322.3 1279.7 314.7 1371.2 310.8C1462.7 307 1554.3 307 1645.8 300.2C1737.3 293.3 1828.7 279.7 1874.3 272.8L1920 266L1920 401L1874.3 401C1828.7 401 1737.3 401 1645.8 401C1554.3 401 1462.7 401 1371.2 401C1279.7 401 1188.3 401 1097 401C1005.7 401 914.3 401 823 401C731.7 401 640.3 401 548.8 401C457.3 401 365.7 401 274.2 401C182.7 401 91.3 401 45.7 401L0 401Z" fill="#00a3ee"></path>
          <path d="M0 348L45.7 344.3C91.3 340.7 182.7 333.3 274.2 336.2C365.7 339 457.3 352 548.8 351.7C640.3 351.3 731.7 337.7 823 336.8C914.3 336 1005.7 348 1097 354.5C1188.3 361 1279.7 362 1371.2 361.5C1462.7 361 1554.3 359 1645.8 354.5C1737.3 350 1828.7 343 1874.3 339.5L1920 336L1920 401L1874.3 401C1828.7 401 1737.3 401 1645.8 401C1554.3 401 1462.7 401 1371.2 401C1279.7 401 1188.3 401 1097 401C1005.7 401 914.3 401 823 401C731.7 401 640.3 401 548.8 401C457.3 401 365.7 401 274.2 401C182.7 401 91.3 401 45.7 401L0 401Z" fill="#19bef0"></path>
          </svg>

      <div style={{background: "linear-gradient(to bottom, #23b5ec, #7415f0)",height:"90vh"}} className="bottomArea">
        <h1 style={{color:"#3a0ba3"}}>Meet Expresume. <span className='flash'> |</span></h1>
        <img src={sample} />
        <h3>Your Own Personal Database For Your Resume
</h3>

      </div>      
    </div>
    );

}
//
export default Home;	

