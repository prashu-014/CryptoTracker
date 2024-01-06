import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { json, useParams } from 'react-router-dom'

import { Container, Row, Col } from 'react-bootstrap'
import { CryptoState } from '../../../CryptoContext';

import { IoHeart } from "react-icons/io5";



export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


const CoinDetails = () => {

    const { currency, symbol } = CryptoState();

    const { id } = useParams();

    const [coin, setCoin] = useState([]);


    const options = {
        headers: {
            'x-access-token': 'coinranking3460d0904ac8ece09db09afc0963ec425ee9369792fe3096',
        },
    };



    useEffect(() => {

        axios.get(`https://api.coinranking.com/v2/coin/${id}`, options).then((res) => {
            setCoin(res.data);
        });

    }, [])



    //api data filter
    const newvalue = coin?.data?.coin;






    //format price 
    const formatPrice = (amount) => {
        const priceNumber = parseFloat(amount);
        return `${priceNumber.toFixed(2)}`;
    }

    //wishlist button active or not
    const [isActive, setActive] = useState(false);


    // const storedState = localStorage.getItem("stateActive");
    // return storedState ? JSON.parse(storedState) : false;






    //wishlist to add coin
    const wishlists = (id) => {





        // console.log(isActive);

        setActive(!isActive)
        let showlist = [];

        showlist = showlist.concat(JSON.parse(localStorage.getItem('showList') || '[]'));




        if (!isActive) {
            let coinData = {
                id: newvalue.uuid,
                rank: newvalue.rank,
                name: newvalue.name,
                image: newvalue.iconUrl,
                changePrice: newvalue.change,
                price: newvalue.price,
                marketCap: newvalue.marketCap,


            }
          


         
            let dataExits = false;


            showlist.forEach(item => {
                if(coinData.id === item.id) {

                    dataExits= true;
                    
                  
                }
                
                


            });

            if(dataExits){

                alert("Already Exists");


                

            }
            else{

                alert("ADDED ON WISHLIST")
                showlist.push(coinData);
                console.log(showlist);
              localStorage.setItem("showList", JSON.stringify(showlist));
               
            }

           

         
        }
        


    }

    useEffect(() => {

      
    }, [isActive])









    return (

        <Container className=' py-2 py-md-5'>

            <Row className='text-white py-md-5'>
                <Col className=' col-12 col-md-4 '>

                    {
                        newvalue &&
                        <div className='text-center position-relative'>
                            <img src={newvalue.iconUrl} alt="" className='img-fluid w-75 ' />

                            <span className='position-absolute start-0'><IoHeart className={`fs-1 ${isActive ? "text-danger" : ""}`} onClick={() => wishlists(newvalue.uuid)} /></span>
                        </div>
                    }


                </Col>
                <Col className='col-12 col-md-8'>

                    {
                        newvalue &&
                        <h1 className=' fw-bold'>{newvalue.name}</h1>
                    }

                    {
                        newvalue &&
                        <h6 className='py-2'>{newvalue.description}</h6>
                    }


                    {
                        newvalue &&
                        <h4>Rank: {newvalue.rank}</h4>
                    }

                    {
                        newvalue &&
                        <h5 >Current Price: {symbol} {numberWithCommas(formatPrice(newvalue.price))}
                        </h5>
                    }

                    {
                        newvalue &&
                        <h5 >Market Price: {symbol} {numberWithCommas(formatPrice(newvalue.marketCap))}
                        </h5>
                    }


                    {
                        newvalue &&
                        <h5 >change Price: {symbol} {numberWithCommas(newvalue.change)}</h5>
                    }

                    {
                        newvalue &&
                        <h5 >Number of Exchange: {newvalue.numberOfExchanges}</h5>
                    }

                    {
                        newvalue &&
                        <h5 >Number of Market: {numberWithCommas(newvalue.numberOfMarkets)}</h5>
                    }


                    {
                        newvalue &&
                        <span>webiste link: <a href={newvalue.websiteUrl}>{newvalue.websiteUrl} </a></span>
                    }








                </Col>
            </Row>

        </Container>
    )
}

export default CoinDetails