import React from 'react';

const Location = ( {data}) => {
    return (
        <div>
            <img src= {data.residents?.[0].image} alt="" />
            <h1> {data.name} </h1>
            <h3><span>Type: </span>{data.type}</h3>
            <h3><span>Dimension: </span>{data.dimension}</h3>
            <h3><span>Residents: </span>{data.residents?.length}</h3>
        </div>
    );
};

export default Location;