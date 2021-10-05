import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-desing">
            <div>
                <div className="container">
                    <div className="row">
                        <h2 style={{textAlign: "center", padding:"25px 0px 0px",textDecoration:"underline"}}>About us</h2>
                        <h5 className="footer-text" style={{width:"70%",textAlign:"center", color:"#333", margin:"0px auto"}}>We Provide You the Best Siye Catagory Natts Online Courses. We also Provide Ofline Sevices Sothat Our Teachers Could Apply The as Possible Teachings to Our new Students. For More Details Contact Us to our Contact Information </h5>
                    </div>
                    <div style={{textAlign:'center',margin:"50px 0px"}}> 
                            <i class="fa fa-facebook" aria-hidden="true" style={{fontSize:"22px",marginLeft:"20px"}}></i>
                            <i class="fa fa-youtube" aria-hidden="true" style={{fontSize:"22px",marginLeft:"20px"}}></i>
                            <i class="fa fa-envelope" aria-hidden="true" style={{fontSize:"22px",marginLeft:"20px"}}></i>
                            <i class="fa fa-phone" aria-hidden="true" style={{fontSize:"22px",marginLeft:"20px"}}></i>

                         </div>
                      </div>
            </div>
        </div>
    );
};

export default Footer;