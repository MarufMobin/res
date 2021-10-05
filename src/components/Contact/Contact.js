import React from 'react';
import Form from 'react-bootstrap/Form'
import img from '../../images/logo.png';

const Contact = () => {
    return ( <div style={{marginBottom:"160px"}}>
            <div className="container">
            <div className="row mt-5">
                <div className="col-md-4 mt-5">
                        <div style={{border: "2px solid #d8822c",padding:"40px",margin:"30px"}}>
                                <h5 style={{textAlign:"center"}}>
                        <img  className="custom-img" src={img} style={{marginBottom:"10px"}}/> <span className="logo">Zulzana</span>

                                </h5>                        
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            
                            <button className="btn btn-warning me-5">Sign in</button>
                            <a href="" style={{color:"gray"}}>Sign Up</a>
                            </Form>
                        </div>
                </div>
                <div className="col-md-8 mt-5"> 
                <div className="mapouter my-4" style={{border:"2px solid #b3610f",marginTop:"10px"}}><div className="gmap_canvas"><iframe width="100%" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
                </div>
            </div>
            </div>
    </div>
    );
};

export default Contact;