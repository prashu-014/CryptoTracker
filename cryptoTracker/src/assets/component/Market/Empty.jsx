import React from 'react'

import Image from '../Images/empty.png'

const Empty = () => {
  return (
    <div className='d-flex justify-content-center'>
        <img src={Image} alt="" className='img-fluid ' />
    </div>
  )
}

export default Empty