import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CoinDetails = () => {
    const {id} = useParams()
    const [coin, setCoin] = useState([])

    useEffect( () => {
        const url = `https://api.coingecko.com/api/v3/coins/${id}`
        fetch (url)
        .then(res => res.json())
        .then(data => setCoin(data))
    }, [id])

    return (
        <div className='px-4 pt-20 pb-4 mx-auto max-w-7xl md:px-2'>
            <div className="h-full grid grid-cols-1 md:grid-cols-2 justify-items-center">

            </div>
        </div>
    );
};

export default CoinDetails;