import React, { useEffect, useState } from 'react';
import Actor from '../Actor/Actor';
import Cart from '../Cart/Cart';
import './Show.css'

const Show = () => {
    const [actors, setActros] = useState([]);
    const [cart, setCart] = useState([]);

    // Call Api and set data on state.
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setActros(data))
    }, []);

    // Handale EventListener for cart. 
    const handaleCart = (actor) => {
        console.log(actor)
        const newCart = [...cart, actor];
        setCart(newCart)
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <div className="row row-cols-1 row-cols-md-3 g-4 pb-5">
                        {
                            actors.map(actor => <Actor
                                key={actor.id}
                                actor={actor}
                                handaleCart={handaleCart}
                            ></Actor>)
                        }
                    </div>
                </div>
                <div className="col-md-3 ">
                    <Cart
                        cart={cart}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Show;