import Banner from '../../components/Banner/Banner';
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

const Home = () => {
    
    const [ carts, setCarts ] = useState([]);

    useEffect( ()=>{
        fetch('./information.JSON')
        .then( res => res.json())
        .then( data => setCarts(data.datas))
    },[])

    return (
        <div>
           <Banner></Banner>


        {/* Cart Section */}
           <div className="container">
                <div className="row my-5">
                    {
                        carts.map( cart => <Cart key={cart.id} cart={cart}/>)
                    }
                </div>
           </div>
        </div>
    );
};

export default Home;