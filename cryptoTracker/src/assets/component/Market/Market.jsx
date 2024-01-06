import React, { useEffect, useState } from 'react'
import axios from 'axios';

import Table from 'react-bootstrap/Table';

import Pagination from 'react-bootstrap/Pagination';

import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../../../CryptoContext';

export function numberWithCommas(x)
{
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
}


const Market = () => {

  const navigate = useNavigate();






  const [marketRes, setMarkert] = useState([]);
  const { currency, symbol } = CryptoState();





  const marketData = async () => {

    const options = {
      headers: {
        'x-access-token': 'coinranking3460d0904ac8ece09db09afc0963ec425ee9369792fe3096',
      },
    };


    const res = await axios.get('https://api.coinranking.com/v2/coins/', options);

    // console.log(res.data.data.coins);

    const coins = res.data.data.coins.map(coin => {

      return {
        uuid: coin.uuid,
        rank: coin.rank,
        name: coin.name,
        icon: coin.iconUrl,
        price: coin.price,
        symbol: coin.symbol,
        marketCap: coin.marketCap,


      }


    })


    setMarkert(coins);






  }

  useEffect(() => {
    marketData();

  }, [])

  // const [page, setPage] = useState(1);

  const [currentPage, setCurrentPage] = useState(1)
  const recordPerPage = 10;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;

  const records = marketRes.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(marketRes.length / recordPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1)

  
const formatPrice =(amount)=>{

  const priceNumber = parseFloat(amount);




  return `${priceNumber.toFixed(2)}`;



}




  return (
    <div className='mt-5 ' >
       

      <h1 className='text-center fw-bold py-3 bg-primary'>Market Dashboard</h1>

    

      <Table className='pt-2 table-dark ' responsive>

        <thead>
          <tr>
            <th>Rank</th>
            <th>Icon</th>
            <th>Symbol</th>
            <th>Name</th>
            <th>Price</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody  >

          {
            // slice((page - 1) * 10, (page - 1) * 10 + 10)
            records && records.map((market) => {

              return (
                <tr key={market.name} onClick={() => navigate(`/CoinDetails/${market.uuid}`)} >
                  <td>
                    {market.rank}

                  </td>
                  <td>
                    <img src={market.icon} alt="" className='img-fluid ' width={"80px"} />
                  </td>

                  <td>
                    {market.symbol}
                  </td>
                  <td >
                    {market.name}
                  </td>
                  <td style={{"whiteSpace":"nowrap"}}>
                  {symbol} {numberWithCommas(formatPrice(market.price))}
                  </td>
                  <td style={{"whiteSpace":"nowrap"}}>
                
                  {symbol} {numberWithCommas(formatPrice(market.marketCap))}
                  </td>

                </tr>

              )

            })

          }


        </tbody>

      </Table>


      <nav className=' '>
        <ul className='pagination '>
          <li className='page-item'>
            <a  onClick={perpage} className='page-link text-dark cursor-pointer'>Prev</a>
          </li>
          {
            numbers.map((n, i) => {
             return(
              <li className={` d-flex align-itmes-center  ${currentPage === n ? 'bg-dark' : ''}`} key={i}>
              <a  className='page-item p-1 px-3 px-md-4 cursor-pointer' onClick={()=>changeCPage(n)} >
                {n}

              </a>
            </li>
             )
            })

          }

          <li className='page-item'>
            <a  onClick={()=>nextpage()} className='page-link text-dark'>Next</a>
          </li>
        </ul>
      </nav>

      

     

    </div>
  )

  function nextpage() {
    if(currentPage !== nPage)
    {
      setCurrentPage(currentPage + 1)
      windowDown();
      
    }

 

  }
  function perpage() {

    if(currentPage !== firstIndex)
    {
      setCurrentPage(currentPage - 1);
      windowDown();
    }

  }
  function changeCPage(id) {
    setCurrentPage(id);
    windowDown();

  }

  function windowDown()
  {
    window.scrollTo(0,1500);
  }
}

export default Market