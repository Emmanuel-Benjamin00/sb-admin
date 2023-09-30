import React, { useContext } from 'react'
import Card from './card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from './context/UserContext';
import { DashboardDataContext } from './context/DashboardContext';
import UseLogout from './Hooks/UseLogout';


function Dashboard() {
    let {data} = useContext(DashboardDataContext)
    let { datas, setDatas } = useContext(UserDataContext)
    let logout = UseLogout()


    let handleDelete = (index) => {
        let newArray = [...datas]
        newArray.splice(index, 1);
        setDatas(newArray)
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
                                                navigate(`/edit/${i}`)
                                            }}>Edit</Button>
                                            &nbsp;
                                            &nbsp;
                                            <Button variant="danger" onClick={() => handleDelete(i)}>Delete</Button>
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