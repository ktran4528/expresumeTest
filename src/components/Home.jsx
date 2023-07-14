import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Landing.css'

function Home(props)
{

    return (
    <div>
      <div className="topArea">
        <div className="topLeftArea">
        <h1 style={{color:"white",padding:"2rem"}}>Building Human To <br></br>Human Connections.<span className='flash'> |</span></h1>
        <h3 style={{textAlign:'left' ,color:"white",marginLeft:"2rem"}}>Helping Young PeopleJoin The WorkForce With A<br></br>Resume Service That Makes It Easer To Land That<br></br>Interview.</h3>
        <button style={{float:'left',marginLeft:"2rem",marginTop:"4rem",background: "linear-gradient(to right, #349de3,  #37119d)"}}><h3>Join The Waitlist!</h3></button>
       
        
 
        </div>
        <div className="topRightArea">
          <p style={{}}> help me please</p>
        </div>
      </div>
      <div className="middleArea">
        <p>PEW PEW</p>
      </div>
      <div className="bottomArea">
      </div>      
    </div>
    );

}
//
export default Home;	

