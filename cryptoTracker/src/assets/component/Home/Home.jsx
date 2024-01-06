import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import Images from '../Images/coin.png'
import Carousel from './Carousel'
import Market from '../Market/Market'

const Home = () => {
  return (
    <Container  fluid="xxl">

      <Row className='row-cols-1 row-cols-md-2'>
        <Col className='p-4 d-flex align-items-center justify-content-center'>
          <div className='text-center fw-bold'>
          <h1 className='display-3 fw-bold'>  Manage Your Crypto, DeFi & NFTs From One Place
          </h1>
          <span>Connect your entire portfolio to track, buy, swap, and stake your assets</span>
          </div>
        </Col>
        <Col><img src={Images} alt="" className='img-fluid' />
        </Col>
      </Row>

      <Carousel/>

      <Market/>
    </Container>
  )
}

export default Home