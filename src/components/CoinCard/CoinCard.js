import React from 'react';
import { Link } from 'react-router-dom';
import './CoinCard.css'

const CoinCard = ({coin}) => {
    // console.log(coin);
    return (
        <div className='shadow-lg rounded-2xl w-{250px} bg-white p-5 '>
                        
            <Link to={`/coins/${coin.id}`}>
                <div className='flex gap-4 justify-between items-center'>
                    <div className="flex-shrink-0">
                        <a href={"https://" + coin.name +".com"} target="_blank"><img className='mx-auto w-20 object-cover rounded-full h-20' src={coin.image} alt="coinImage" /></a>
                    </div>
                    <div className="flex flex-col justify-end">
                        <a href="" target="_blank"><span className='text-gray-600 font-medium coin-name'>{coin.name}</span></a>
                        
                        <span className='text-gray-600 text-xs'><span className='text-zinc-800 coin-details-name'></span>{coin.symbol}</span>

                        {/* <span className='text-gray-600 text-xs'><span className='text-zinc-800 coin-details-name'>symbol</span>: {coin.symbol}</span>
                        
                        <span className='text-gray-600 text-xs'><span className='text-zinc-800 coin-details-name'>price</span>: {coin.current_price}</span>

                        
                        <span className='text-gray-600 text-xs'><span className='text-zinc-800 coin-details-name'>rank</span>: {coin.market_cap_rank}</span> */}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CoinCard;