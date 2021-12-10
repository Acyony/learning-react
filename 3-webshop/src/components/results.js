import React, {useContext} from 'react';
import {StorageContext} from "../contexts";

function Results() {
    const {mainState} = useContext(StorageContext);


    const productImgError = (event) => {
        // change the product image if it was broken
        event.target.src = '/link_broken.png';

        // delete the product if the image is broken
        // event.parentNode.remove();
    }

    if (mainState.dataStatus === 'done') {
        const images = mainState.products.map((product, index) => {
            return (
                <div className="col-3" key={product.ikea_id}>
                    <img
                        className="img-thumbnail"
                        onError={productImgError}
                        src={product.image}
                        alt={product.name}/>
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