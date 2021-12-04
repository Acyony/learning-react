import React, {useContext} from 'react';
import {StorageContext} from "../contexts";

function Results() {
    const {mainState} = useContext(StorageContext);
    if (mainState.dataStatus === 'done') {
        const images = mainState.products.map((product, index) => {
            return (
                <div className="col-3" key={index}>
                    <img
                        className="img-thumbnail"
                        key={product.ikea_id}
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