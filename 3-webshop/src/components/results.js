import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {StorageContext} from "../contexts";
import Stars from "./stars";

function Results() {
    const {mainState} = useContext(StorageContext);


    const productImgError = (event) => {
        // change the product image if it was broken
        event.target.src = '/link_broken.png';

        // delete the product if the image is broken
        // event.parentNode.remove();
    }

    if (mainState.dataStatus === 'done') {
        const images = mainState.products.map(product => {
            return (
                <div key={product.ikea_id} className="col-3">
                    <div className="card">
                        <img className="card-img-top" onError={productImgError} src={product.image} alt={product.name}/>
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <h6>{product.price} Euro</h6>
                            <Stars rate={product.rating}/>
                            <Link to={`/products/${product.ikea_id}`} className="btn btn-primary">Details</Link>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className="row">
                {images}
            </div>
        )
    } else {
        return (
            <div>
                No data
            </div>
        );
    }
}

export default Results;