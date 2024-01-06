import React from 'react'
import Image from '../Images/aboutImg.png'
import { Container, Row, Col } from 'react-bootstrap'

const About = () => {
    return (
        <Container fluid="xxl">
            <Row className='row-cols-1 row-cols-md-2'>
                <Col className='order-2 order-md-0'>
                    <img src={Image} alt="" className='img-fluid' />
                </Col>
                <Col className=' mt-2 mt-md-5'>
                    <div className="content">
                        <h1 className='fw-bold'>About Aidos Market</h1>
                        <p className='fs-5'>
                            A Unique Exchange With a Unique Background
                            Aidos Market is a unique cryptocurrency exchange created with the goal of making cryptocurrency trading easier and more reliable. We do not List coins just to make money. We will list only the ones with potential, unique tech and business plan. We will never ask for money to list coins
                            We constantly improve in order to answer the needs of our users, tighten security and provide features that will create a new standard for cryptocurrency exchange platforms.
                        </p>
                        <button className='px-2 py-1 border-0 bg-primary text-white'>ReadMe</button>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}

export default About