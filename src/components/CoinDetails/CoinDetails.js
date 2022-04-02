import React from 'react';
import { useParams } from 'react-router-dom';

const CoinDetails = () => {
    const {id} = useParams()
    return (
        <div>
            <h1>Coin details</h1>
        </div>
    );
};

export default CoinDetails;