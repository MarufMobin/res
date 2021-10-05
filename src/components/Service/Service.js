import { useEffect, useState } from "react";
import ServiceCart from "../ServiceCart/ServiceCart";

const Service = () => {

    const [ servicesCart, setServicesCart ] = useState([])

    useEffect( ()=>{
         fetch('./service.JSON')
         .then( res => res.json())
         .then( data => setServicesCart(data.datas))
    },[])

    return (
        <div className="container">
           <div className="row">
               {
                   servicesCart.map( serviceCart => <ServiceCart key={serviceCart.id} service={serviceCart}></ServiceCart>)
               }
           </div>
        </div>
    );
};

export default Service;