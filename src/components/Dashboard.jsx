import React, { useContext, useEffect, useState } from 'react'
import Card from './card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from './context/UserContext';
import { DashboardDataContext } from './context/DashboardContext';
import UseLogout from './Hooks/UseLogout';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Dashboard() {

    let { data } = useContext(DashboardDataContext)
    let { API_URL } = useContext(UserDataContext)
    let logout = UseLogout()

    const [datas, setDatas] = useState([])

    /*
        !Getting API in traditional promise chaining method
        function getData() {
            fetch(API_URL,{
                method:'GET',
                'Content-Type':'application/json'
            )}
            .then((res) => res.json())
            .then((data) => console.log(data))
        }
    */


    //Axios Method
    const getData = async () => {
        try {
            let res = await axios.get(API_URL)
            if (res.status === 200) {
                console.log(res.data)
                //toast.success("User data fetched")
                setDatas(res.data)
            }
        } catch (error) {
            toast.error("Internal Server Error")
        }


    }

    useEffect(() => {
        getData()
    }, [])

    let handleDelete =  async(id,index) => {
        let newData = [...datas]
        newData.splice(index,1)
        setDatas(newData)
        try {
            let res = await axios.delete(`${API_URL}/${id}`)
            if(res.status===200){
                getData()
            }
        } catch (error) {
            toast.error("Error Occured")
        }
    }

    const navigate = useNavigate();
    return (
        <>
            <div className="container-fluid">

                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                    <Button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" onClick={logout}>Log Out</Button>
                </div>

                <div className="row">
                    {data.map((e, i) => {
                        return <Card
                            data={e}
                            key={i}
                        />
                    })}
                </div>
                <div className='row'>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Batch</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                datas.map((e, i) => {
                                    return <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{e.name}</td>
                                        <td>{e.username}</td>
                                        <td>{e.email}</td>
                                        <td>{e.mobile}</td>
                                        <td>{e.batch}</td>
                                        <td>
                                            <Button variant="primary" onClick={() => {
                                                navigate(`/edit/${e.id}`)
                                            }}>Edit</Button>
                                            &nbsp;
                                            &nbsp;
                                            <Button variant="danger" onClick={() => handleDelete(e.id,i)}>Delete</Button>
                                        </td>
                                    </tr>

                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default Dashboard;