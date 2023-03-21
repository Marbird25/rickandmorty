import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({url}) => {
const[resident, setResident] = useState({})

useEffect(() => {
axios
    .get(url)
    .then ( (resp)  => setResident(resp.data))
    .catch ( error => console.error(error))

}, [])

console.log(resident)

const bgStatus = () => {
    if (resident.status === "Alive") {
        return "green"
    } else if (resident.status === "Dead"){
        return "red"
    } else{
        return "grey"
    }
}

    return (
        <div className='resident__card'>
            
                <img className='image' src={resident.image} alt="" />
                <div className='info__status'>
                    <div className='status' style={{backgroundColor: bgStatus()}}></div>
                    <p>{resident.status}</p>
                </div>
        
                <h3>{resident.name}</h3>
                <p><span>Origin: </span> {resident.origin?.name} </p>
                <p><span>Episodes: </span> {resident.episode?.length} </p>
        </div>
    );
};

export default ResidentInfo;