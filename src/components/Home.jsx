import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import './Landing.css'
import sample from './images/sampleExpresume.png'
import king from './images/kingston.png'
import markham from './images/markham.png'
import cac from './images/CAC-logo.png'
import centen from './images/centennialcollege.jpg'
import accnewmarket from './images/acceleratenewmarket.png'
import loi from './images/LOI.png'
import newmarket from './images/newmarket.png'
import treefrog from './images/treefrog.png'
import space from './images/YSpace_Markham.png'



function Home() {
  useEffect(() => {
    const disableScroll = () => {
      document.documentElement.style.overflowX = 'hidden';
      document.body.scroll = 'no';
      window.scrollTo(0, 0);

    };

    disableScroll();



  }, []);


  return (
    <div style={{ height: "3800px" }}>
      <div className="topArea">
        <div className="topLeftArea">
          <h1 className="slideInRight" style={{ color: "white", padding: "2rem", textAlign: "left" }}>Building Human To Human <br></br>Connections.<span className='flash'> |</span></h1>
          <h3 style={{ textAlign: 'left', color: "white", marginLeft: "2rem" }}>Helping Young People Join The WorkForce With A<br></br>Resume Service That Makes It Easer To Land That<br></br>Interview.</h3>
          <button style={{ float: 'left', marginLeft: "2rem", marginTop: "4rem", background: "linear-gradient(to right, #349de3,  #37119d)" }}><h3>Join The Waitlist!</h3></button>



        </div>
        <div className="topRightArea">

        </div>
      </div>

      <div className="middleArea" style={{ paddingTop: "3rem" }}>
        <div style={{ float: "right" }} className="middleRightArea"  >
          <h1 style={{ color: "#3a0ba3", textAlign: "left" }}>Ever Felt Like You Needed To "Crack<br></br>The Code" When Submitting Your<br></br>Resume?</h1>
          <h3 style={{ color: "#3a0ba3", textAlign: 'left', paddingTop: "2rem", paddingBottom: "2rem", paddingRight: '2rem' }}>Your Job Search Is Stressful Enough, And Landing That First Interview<br></br>Can Feel Like A Struggle.</h3>
          <p style={{ textAlign: "left", fontSize: "1.2rem", color: "#3a0ba3" }}> You keep scanning job descriptions, looking for the right keywords and phrases to include in your<br></br>resume, hoping you get it right so you can get noticed by the tracking system or HR team.<br></br>
            But we all know it is a numbers game, and spending all of this time personalizing your resume<br></br>for every job you apply for is time-consuming.
          </p>
        </div>
        <div className="middleLeftArea">

        </div>

      </div>
      <svg id="visual" viewBox="0 0 1920 400" width="1920" height="400" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" data-v-6c7cbdae="">
        <path d="M0 101L45.7 108.8C91.3 116.7 182.7 132.3 274.2 142.7C365.7 153 457.3 158 548.8 148.5C640.3 139 731.7 115 823 116.7C914.3 118.3 1005.7 145.7 1097 147.7C1188.3 149.7 1279.7 126.3 1371.2 127.7C1462.7 129 1554.3 155 1645.8 151C1737.3 147 1828.7 113 1874.3 96L1920 79L1920 401L1874.3 401C1828.7 401 1737.3 401 1645.8 401C1554.3 401 1462.7 401 1371.2 401C1279.7 401 1188.3 401 1097 401C1005.7 401 914.3 401 823 401C731.7 401 640.3 401 548.8 401C457.3 401 365.7 401 274.2 401C182.7 401 91.3 401 45.7 401L0 401Z" fill="#3a0ca3">
        </path>
        <path d="M0 195L45.7 193C91.3 191 182.7 187 274.2 181C365.7 175 457.3 167 548.8 169.8C640.3 172.7 731.7 186.3 823 194.2C914.3 202 1005.7 204 1097 202.7C1188.3 201.3 1279.7 196.7 1371.2 199C1462.7 201.3 1554.3 210.7 1645.8 202.7C1737.3 194.7 1828.7 169.3 1874.3 156.7L1920 144L1920 401L1874.3 401C1828.7 401 1737.3 401 1645.8 401C1554.3 401 1462.7 401 1371.2 401C1279.7 401 1188.3 401 1097 401C1005.7 401 914.3 401 823 401C731.7 401 640.3 401 548.8 401C457.3 401 365.7 401 274.2 401C182.7 401 91.3 401 45.7 401L0 401Z" fill="#2140c0"></path>
        <path d="M0 172L45.7 171.8C91.3 171.7 182.7 171.3 274.2 179.2C365.7 187 457.3 203 548.8 206.2C640.3 209.3 731.7 199.7 823 196C914.3 192.3 1005.7 194.7 1097 197.5C1188.3 200.3 1279.7 203.7 1371.2 199.2C1462.7 194.7 1554.3 182.3 1645.8 180.3C1737.3 178.3 1828.7 186.7 1874.3 190.8L1920 195L1920 401L1874.3 401C1828.7 401 1737.3 401 1645.8 401C1554.3 401 1462.7 401 1371.2 401C1279.7 401 1188.3 401 1097 401C1005.7 401 914.3 401 823 401C731.7 401 640.3 401 548.8 401C457.3 401 365.7 401 274.2 401C182.7 401 91.3 401 45.7 401L0 401Z" fill="#0064d6"></path>
        <path d="M0 215L45.7 228.5C91.3 242 182.7 269 274.2 279.3C365.7 289.7 457.3 283.3 548.8 273C640.3 262.7 731.7 248.3 823 238.8C914.3 229.3 1005.7 224.7 1097 229.5C1188.3 234.3 1279.7 248.7 1371.2 247.7C1462.7 246.7 1554.3 230.3 1645.8 232.3C1737.3 234.3 1828.7 254.7 1874.3 264.8L1920 275L1920 401L1874.3 401C1828.7 401 1737.3 401 1645.8 401C1554.3 401 1462.7 401 1371.2 401C1279.7 401 1188.3 401 1097 401C1005.7 401 914.3 401 823 401C731.7 401 640.3 401 548.8 401C457.3 401 365.7 401 274.2 401C182.7 401 91.3 401 45.7 401L0 401Z" fill="#0085e6"></path>
        <path d="M0 280L45.7 284.7C91.3 289.3 182.7 298.7 274.2 307.3C365.7 316 457.3 324 548.8 321.5C640.3 319 731.7 306 823 305.7C914.3 305.3 1005.7 317.7 1097 320C1188.3 322.3 1279.7 314.7 1371.2 310.8C1462.7 307 1554.3 307 1645.8 300.2C1737.3 293.3 1828.7 279.7 1874.3 272.8L1920 266L1920 401L1874.3 401C1828.7 401 1737.3 401 1645.8 401C1554.3 401 1462.7 401 1371.2 401C1279.7 401 1188.3 401 1097 401C1005.7 401 914.3 401 823 401C731.7 401 640.3 401 548.8 401C457.3 401 365.7 401 274.2 401C182.7 401 91.3 401 45.7 401L0 401Z" fill="#00a3ee"></path>
        <path d="M0 348L45.7 344.3C91.3 340.7 182.7 333.3 274.2 336.2C365.7 339 457.3 352 548.8 351.7C640.3 351.3 731.7 337.7 823 336.8C914.3 336 1005.7 348 1097 354.5C1188.3 361 1279.7 362 1371.2 361.5C1462.7 361 1554.3 359 1645.8 354.5C1737.3 350 1828.7 343 1874.3 339.5L1920 336L1920 401L1874.3 401C1828.7 401 1737.3 401 1645.8 401C1554.3 401 1462.7 401 1371.2 401C1279.7 401 1188.3 401 1097 401C1005.7 401 914.3 401 823 401C731.7 401 640.3 401 548.8 401C457.3 401 365.7 401 274.2 401C182.7 401 91.3 401 45.7 401L0 401Z" fill="#19bef0"></path>
      </svg>

      <div style={{ alignContent: 'center', background: "linear-gradient(to bottom, #23b5ec, #3a0ba3)", height: "140vh" }} className="bottomArea">
        <h1 style={{ color: "#3a0ba3" }}>Meet Expresume. <span className='flash'> |</span></h1>
        <img style={{ paddingTop: "2rem" }} src={sample} />
        <h3 style={{ color: "White", paddingTop: "2rem" }}>Your Own Personal Database For Your Resume</h3>
        <p style={{ paddingLeft: "4rem", textAlign: 'left', fontSize: "1.2rem", color: "white" }}>Expresume allows you to easily create customized resumes that align with a company's job description, fit a specific occupation, get past the tracking<br></br>
          programs that many companies use for screening resumes,</p>
        <h3 style={{ paddingTop: "2rem", color: 'white' }}>Helping you get hired. <span className='flash'> |</span></h3>
        <button style={{ background: "linear-gradient(to right, #4187f5, #7118ed)", float: 'left', marginLeft: "10rem", width: "30rem", marginTop: "2rem" }}><h2>Join The Waitlist!</h2></button>
        <button style={{ background: "linear-gradient(to right, #4187f5, #7118ed)", width: "30rem", marginTop: "2rem" }}><h2>Learn More</h2></button>



      </div>
      <svg id="visual" viewBox="0 0 1920 540" width="1920" height="540" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink">
        <path d="M0 402L45.7 387.3C91.3 372.7 182.7 343.3 274.2 322.2C365.7 301 457.3 288 548.8 281.7C640.3 275.3 731.7 275.7 823 283.2C914.3 290.7 1005.7 305.3 1097 329.3C1188.3 353.3 1279.7 386.7 1371.2 393.5C1462.7 400.3 1554.3 380.7 1645.8 384.5C1737.3 388.3 1828.7 415.7 1874.3 429.3L1920 443L1920 0L1874.3 0C1828.7 0 1737.3 0 1645.8 0C1554.3 0 1462.7 0 1371.2 0C1279.7 0 1188.3 0 1097 0C1005.7 0 914.3 0 823 0C731.7 0 640.3 0 548.8 0C457.3 0 365.7 0 274.2 0C182.7 0 91.3 0 45.7 0L0 0Z" fill="#19bef0"></path>
        <path d="M0 222L45.7 240.5C91.3 259 182.7 296 274.2 312.2C365.7 328.3 457.3 323.7 548.8 315.8C640.3 308 731.7 297 823 288.2C914.3 279.3 1005.7 272.7 1097 279C1188.3 285.3 1279.7 304.7 1371.2 302.3C1462.7 300 1554.3 276 1645.8 280.5C1737.3 285 1828.7 318 1874.3 334.5L1920 351L1920 0L1874.3 0C1828.7 0 1737.3 0 1645.8 0C1554.3 0 1462.7 0 1371.2 0C1279.7 0 1188.3 0 1097 0C1005.7 0 914.3 0 823 0C731.7 0 640.3 0 548.8 0C457.3 0 365.7 0 274.2 0C182.7 0 91.3 0 45.7 0L0 0Z" fill="#009ced"></path>
        <path d="M0 225L45.7 221C91.3 217 182.7 209 274.2 204.2C365.7 199.3 457.3 197.7 548.8 212.5C640.3 227.3 731.7 258.7 823 260.2C914.3 261.7 1005.7 233.3 1097 226C1188.3 218.7 1279.7 232.3 1371.2 245.8C1462.7 259.3 1554.3 272.7 1645.8 266.8C1737.3 261 1828.7 236 1874.3 223.5L1920 211L1920 0L1874.3 0C1828.7 0 1737.3 0 1645.8 0C1554.3 0 1462.7 0 1371.2 0C1279.7 0 1188.3 0 1097 0C1005.7 0 914.3 0 823 0C731.7 0 640.3 0 548.8 0C457.3 0 365.7 0 274.2 0C182.7 0 91.3 0 45.7 0L0 0Z" fill="#0075df"></path>
        <path d="M0 116L45.7 125C91.3 134 182.7 152 274.2 163.5C365.7 175 457.3 180 548.8 169.7C640.3 159.3 731.7 133.7 823 135C914.3 136.3 1005.7 164.7 1097 174C1188.3 183.3 1279.7 173.7 1371.2 169C1462.7 164.3 1554.3 164.7 1645.8 167.7C1737.3 170.7 1828.7 176.3 1874.3 179.2L1920 182L1920 0L1874.3 0C1828.7 0 1737.3 0 1645.8 0C1554.3 0 1462.7 0 1371.2 0C1279.7 0 1188.3 0 1097 0C1005.7 0 914.3 0 823 0C731.7 0 640.3 0 548.8 0C457.3 0 365.7 0 274.2 0C182.7 0 91.3 0 45.7 0L0 0Z" fill="#194ac6"></path>
        <path d="M0 49L45.7 59.8C91.3 70.7 182.7 92.3 274.2 103.8C365.7 115.3 457.3 116.7 548.8 117.7C640.3 118.7 731.7 119.3 823 118.5C914.3 117.7 1005.7 115.3 1097 105.7C1188.3 96 1279.7 79 1371.2 71.2C1462.7 63.3 1554.3 64.7 1645.8 65.3C1737.3 66 1828.7 66 1874.3 66L1920 66L1920 0L1874.3 0C1828.7 0 1737.3 0 1645.8 0C1554.3 0 1462.7 0 1371.2 0C1279.7 0 1188.3 0 1097 0C1005.7 0 914.3 0 823 0C731.7 0 640.3 0 548.8 0C457.3 0 365.7 0 274.2 0C182.7 0 91.3 0 45.7 0L0 0Z" fill="#3a0ca3"></path>
      </svg>

      <div className='bottomArea'>
        <h1 style={{ color: "#3a0ba3", fontSize: "4rem" }}>Sponsors</h1>
        <img style={{ paddingLeft: "5rem", width: "20%" }} src={king} />
        <img style={{ paddingLeft: "10rem", width: "30%" }} src={markham} />
        <h1 style={{ color: "#3a0ba3", fontSize: "4rem" }}>Partners</h1>

        <img style={{ width: "15%" }} src={cac} />
        <img style={{ width: "15%", marginLeft: "10rem", marginRight: '10rem' }} src={loi} />
        <img style={{ width: "15%" }} src={space} />
        <br></br>
        <div style={{ paddingTop: "2rem" }}>
          <img style={{ width: "15%" }} src={accnewmarket} />
          <img style={{ width: "15%", marginLeft: "10rem" }} src={centen} />
          <img style={{ width: "15%", marginLeft: "10rem" }} src={newmarket} />
          <img style={{ width: "9%", marginLeft: "10rem" }} src={treefrog} />
        </div>

      </div>

    </div>
  );

}
//
export default Home;

