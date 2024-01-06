import React, {useEffect, useState } from 'react'

import { Container, Row } from 'react-bootstrap'


import TableWishlist from './TableWishlist';
import Empty from './Empty';

const Wishlist = () => {

  const [datalist ,setDatalist] = useState([])

  const data = JSON.parse(localStorage.getItem("showList")) || [];




  useEffect(()=>{
    
  },[datalist])

 




  return (
    <Container fluid="xxl p-0 py-4 px-2">

      <Row className='bg-econadary overflow-hidden ' >
        <h1 className='fw-bold text-center'>WishLists</h1>
        {
          data.length > 0 ? (<TableWishlist />) : (<Empty />)
          
        }


      </Row>

    </Container>
  )
}

export default Wishlist