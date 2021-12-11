import React from 'react';

function Stars(props) {
    const starElements = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= props.rate) {
            starElements.push(
                <span key={i} className="gold-star"></span>
            )
        } else {
            starElements.push(
                <span key={i} className="grey-star"></span>
            )
        }
    }
    return (
        <div>
            {starElements}
        </div>
    );
}

export default Stars;