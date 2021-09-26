import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Actor.css'

const Actor = (props) => {
    // Distructuring Obuject.
    const { name, age, salary, picture, gender, country } = props.actor;
    // Assing Fontawsome icon.
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="col">
            <div className="card glassStyle">
                <div className="actor-img-border">
                    <img className="actorImage" src={picture} alt="" />
                </div>

                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text">Age: {age}</p>
                    <p className="card-text">Gender: {gender}</p>
                    <p className="card-text">Salary: ${salary}</p>
                    <p className="card-text">Country: {country}</p>
                    <div>
                        <button className="button" onClick={() => props.handaleCart(props.actor)}>{cartIcon} Add Actor</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Actor;