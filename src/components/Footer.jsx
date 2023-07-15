import React from 'react';
import logo from './images/apple-touch-icon.png';
import linkedin from './images/linkedin.png';

function Footer() {
    const handleClick = () => {
        window.location.href = 'https://www.linkedin.com/company/expresume/';
    };

    return (
        <footer style={{ background: '#37119d', padding: '20px' }}>
            <div className="container">
                <p style={{ float: 'left', color: 'white', fontSize: '1.5rem' }}>
                    <img src={logo} alt="Logo" /> Expresume &copy; 2023
                </p>
                <p style={{ float: 'right', color: 'white', fontSize: '1.5rem', marginRight: "6rem" }}>

                    Links
                    <br></br>
                    <p style={{ fontSize: "0.7rem", textAlign: 'left', paddingLeft: "2rem" }}>Home <span style={{ paddingLeft: "1rem" }}>Join The Waitlist</span>
                        <br></br>
                        About <span style={{ paddingLeft: "1rem" }}>Terms Of Service</span>
                        <br></br>
                        Pricing

                        <span style={{ paddingLeft: "1rem" }}>Privacy Policy</span></p>
                </p>
                <p style={{ marginLeft: "10%", marginRight: "20%", color: 'white', fontSize: '1.5rem' }}>
                    Reach out to us<br></br>
                    <button onClick={handleClick} style={{ display: 'contents', width: "auto", background: 'none', border: 'none' }}>
                        <img style={{ width: "7%" }} src={linkedin} alt="LinkedIn" />
                    </button>



                </p>
            </div>
        </footer>
    );
}

export default Footer;
