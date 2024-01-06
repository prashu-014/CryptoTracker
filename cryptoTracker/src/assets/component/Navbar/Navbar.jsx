import React from 'react'

import { Container } from 'react-bootstrap'
import { CryptoState } from '../../../CryptoContext'

import { IoHeart } from "react-icons/io5";

import { Link } from 'react-router-dom'

const Navbar = () => {


  const {currency,setCurrency} = CryptoState()

  // console.log(currency);


  return (

    <Container className='bg-dark d-flex justify-content-between align-items-center p-2 ' fluid="xxl">
      <Link className="logo text-white fw-bold" to="/">CryptoClub</Link>
      <nav>
        <ul className='d-none d-md-flex m-0 p-0'>
        <li className='ms-4'><Link to="/" className='text-white'>Home</Link></li>
          <li className='ms-4'><Link to="aboutUs" className='text-white'>About us</Link></li>
          <li className='ms-4'><Link to="/wishlist" className='text-white'>Wishlist</Link></li>
          <li className='ms-4'>Contact</li>
        </ul>
      </nav>
      <div className='d-flex gap-2'>
       <select name="" id="" className='p-0 px-2 bg-primary border-0 btn' value={currency} onChange={(e)=> setCurrency(e.target.value)}>
        <option value="INR">INR</option>
        <option value="USD">USD</option>
       </select>
       
        <button className='btn bg-primary d-none d-md-block'>Login</button>
        <Link className='btn bg-primary  d-md-none' to="wishlist"><IoHeart className='fs-3'/></Link>
      </div>
    </Container>
  )
}

export default Navbar