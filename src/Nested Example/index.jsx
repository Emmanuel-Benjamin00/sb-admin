import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function NestedExample() {
    let [page, setPage] = useState(0);
    let navigate = useNavigate();

    useEffect(()=>{
        navigate("accounts")
    },[])

    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Nested Example</h1>
            </div>

            <div>Example for Nested Routes</div>

            <div className='container-fluid'>
                <ul className='pageButtons'>
                    <li className={page === 0 ? "active" : ""} onClick={() => 
                    {
                        navigate("accounts")
                        setPage(0)}}>Accounts</li>
                    <li className={page === 1 ? "active" : ""} onClick={() => 
                    {
                        navigate("products")
                        setPage(1)}}>Products</li>
                    <li className={page === 2 ? "active" : ""} onClick={() => 
                    {
                        navigate("receipts")
                        setPage(2)}}>Receipts</li>
                    <li className={page === 3 ? "active" : ""} onClick={() => 
                    {
                        navigate("staff")
                        setPage(3)}}>Staff</li>
                </ul>
            </div>


            <div className='container-fluid'>
                <Outlet />
            </div>

        </div>
    )
}

export default NestedExample