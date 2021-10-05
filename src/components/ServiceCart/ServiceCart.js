import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const ServiceCart = (props) => {
    
    const {duration,fee,img,language,name,des} = props.service;

    return (
        <div className="col-md-3 my-5">
           <Card style={{ width: '18rem',boxShadow:"0px 0px 15px #333"}}>
                <Card.Img variant="top" src={img} style={{height:"200px"}} />
                <Card.Body>
                    <Card.Title><h3 style={{color:"#d8822c"}}>{name}</h3>  </Card.Title>
                    <Card.Text>
                    {des.slice(0,200)}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem >Language : {language}</ListGroupItem>
                    <ListGroupItem >Duration : {duration} Month</ListGroupItem>
                    <ListGroupItem >Fee : {fee}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <div style={{textAlign:"center"}}>
                    <button className="btn btn-warning"><i class="fa fa-shopping-cart" aria-hidden="true" style={{marginRight:"15px"}}></i>
 Get </button>
                    </div>
                </Card.Body>
                </Card>
        </div>
    );
};

export default ServiceCart;