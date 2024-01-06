import React, { useEffect, useState } from 'react'

import { Container, Row, Table } from 'react-bootstrap'
import { AiOutlineDelete } from "react-icons/ai";
import { CryptoState } from '../../../CryptoContext';


export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const TableWishlist = () => {

    const [wishlistData, setWishlistData] = useState([])

    const data = JSON.parse(localStorage.getItem("showList")) || [];

    const formatPrice = (amount) => {
        const priceNumber = parseFloat(amount);
        return `${priceNumber.toFixed(2)}`;
    }


    useEffect(() => {

    }, [wishlistData])





    const deleteWishlist = (id) => {

        const filterData = data.filter((itme) => id !== itme.id);

        setWishlistData(filterData)

        localStorage.setItem("showList", JSON.stringify(filterData));


        


    }

    const { currency, symbol } = CryptoState();

   
    return (
        <Table className=" table table-dark" responsive>
            <thead>
                <tr>
                    <th scope="col">Rank</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col" style={{ "whiteSpace": "nowrap" }}>Change Price</th>
                    <th scope="col">Market Cap</th>
                    <th scope="col">Edit</th>
                </tr>
            </thead>
            <tbody className=''>
                {
                    data.map((item, i) => {
                        return (

                            <tr key={i} className=''>

                                <td>{item.rank}</td>
                                <td>
                                    <img src={item.image} alt="" className='img-fluid' width={"50px"} /> {item.name}</td>
                                <td>{symbol} {formatPrice(item.price)}</td>
                                <td style={{"whiteSpace":"nowrap"}}>{item.changePrice}</td>
                                <td style={{"whiteSpace":"nowrap"}}>{numberWithCommas(item.marketCap)}</td>
                                <td ><AiOutlineDelete className='fs-4' onClick={() => deleteWishlist(item.id)} /></td>

                            </tr>


                        )


                    })

                }


            </tbody>
        </Table>
    )
}

export default TableWishlist