import React  from 'react'
import Card from './card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const data = [
    {
        color:"primary",
        value:"40,000",
        head:"Earnings (Monthly)",
        logo:"fa-calendar"
    },
    {
        color:"success",
        value:"215,000",
        head:"Earnings (Annual)",
        logo:"fa-dollar-sign"
    },
    {
        isLoading:true,
        color:"info",
        value:"50",
        head:"Tasks",
        logo:"fa-clipboard-list"
    },
    {
        color:"warning",
        value:"18",
        head:"Pending Requests",
        logo:"fa-comments"
    }
]


function Dashboard({datas,setDatas}) {
    let handleDelete = (index) =>{
        let newArray = [...datas]
        newArray.splice(index,1);
        setDatas(newArray)
    }

    const navigate = useNavigate();
    return (
        <>
            <div className="container-fluid">

                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                    <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                        className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
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
                                    return (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{e.name}</td>
                                            <td>{e.username}</td>
                                            <td>{e.email}</td>
                                            <td>{e.mobile}</td>
                                            <td>{e.batch}</td>
                                            <td>
                                                <Button variant="primary" onClick={()=>{
                                                    navigate(`/edit/${i}`)
                                                }}>Edit</Button>
                                                &nbsp;
                                                &nbsp;
                                                <Button variant="danger" onClick={()=>handleDelete(i)}>Delete</Button>
                                            </td>
                                        </tr>
                                    )
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