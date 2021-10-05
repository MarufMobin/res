import React from 'react';
import { Card } from 'react-bootstrap';

const Cart = (props) => {
    console.log(props.cart)
    const {name,img,fee,duration} = props.cart;
    return (
        <div className="col-md-3">
            <Card style={{ width: '18rem',margin: '20px' ,boxShadow: '0px 0px 10px #000' }}>
                <Card.Img src={img} style={{height: "200px"}}/>
                <Card.Body>
                    <Card.Title><h4 style={{color:"#d8822c"}}>{name}</h4></Card.Title>
                    <Card.Text>
                        <h5>Price: {fee} </h5>
                        <h5>Duration : {duration} Month </h5>
                    </Card.Text>
                </Card.Body>
                </Card>
        </div>
    );
};

export default Cart;