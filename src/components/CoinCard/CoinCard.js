import React from 'react';
import { Link } from 'react-router-dom';
import './CoinCard.css'

const CoinCard = ({coin}) => {
    // console.log(coin);
    return (
        <div className='shadow-lg rounded-2xl w-[278px] bg-white p-5 '>
                        
            <Link to={`/coin-details/${coin.id}`}>
                <div className='flex gap-6 justify-between items-center'>
                    <div className="flex-shrink-0">
                        <div>
                        <a href={"https://" + coin.name +".com"} target="_blank"><img className='mx-auto w-20 h-20 object-cover rounded-full' src={coin.image} alt="coinImage" /></a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-end">
                        <a href="" target="_blank"><span className='text-gray-600 font-medium coin-name'>{coin.name}</span></a>
                        
                        <span className='text-gray-600 text-xs'>{coin.symbol}</span>

                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CoinCard;
   