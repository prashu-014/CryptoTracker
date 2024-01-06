import React, { useEffect, useState } from 'react';

import { CryptoState } from '../../../CryptoContext';

// import { TrendingCoins } from '../../Config/api'

import axios from 'axios';



//  import { Link } from 'react-router-dom'
// import CoinCard from './CoinCard';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export function numberWithCommas(x)
{
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
}





const Carousel = () => {






  const { currency ,symbol} = CryptoState();

  const [response, setresponse] = useState([]);
  const [loading, setloading] = useState(false);

` `
  const fetcData = async () => {

    const res = await axios.get(`https://api.coingecko.com/api/v3/search/trending`);

    const coins = res.data.coins.map(coin => {

      return {
        name: coin.item.name,
        image: coin.item.large,
        id: coin.item.id,
        priceBtc: coin.item.price_btc


      }

    })
    setresponse(coins);

    {
      // const items = coins && coins.map(user =>setresponse(user))
    }


  }

  



  useEffect(() => {
    fetcData();

  }, [currency])


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow:1,
          slidesToScroll: 1
        }
      }
    ]

  };









  return (

    <div className='py-5' >
      <div className='text-center py-4'>
        <span className='bg-success px-5 py-2'>Treading Coins</span>
      </div>

      <Slider {...settings}>





        {
          response && response.map((coin) => {

            return(
              <div key={coin.id} className='p-2 text-center'>
              <div className='d-flex justify-content-center'>

                <img src={coin.image} alt="" className='img-fluid w-50' />
              </div>
              <div>
                <span>{coin.name}</span>
             
              </div>
              <div>
               {symbol} {numberWithCommas(coin.priceBtc.toFixed(5))}
              </div>
            </div>
            )

          }




          )

        }




    </Slider >
    </div>

  )
}

export default Carousel