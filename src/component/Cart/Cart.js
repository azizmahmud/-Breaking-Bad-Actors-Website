import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // Distructring Object 
    const { cart } = props;
    let totalCost = 0;
    // getting single object from array of object using for loop
    for (const actor of cart) {
        totalCost = totalCost + actor.salary;

    }

    return (
        <div className="cart-glassStyle sticky-top">
            <div className="card-body">
                <h3 className="card-title mt-3">Actors Added {props.cart.length}</h3>
                <h5 className="card-text mb-3">Total Cost ${totalCost}</h5>
                {
                    props.cart.map(actor => {
                        return (
                            <div className="d-flex align-items-center selectedActors mb-3">

                                <img className="cart-img" src={actor.picture} alt="" />
                                <h5>{actor.name}</h5>
                            </div>)
                    })
                }
                <button className="button">Buy Now</button>
            </div>
        </div>
    );
};

export default Cart;