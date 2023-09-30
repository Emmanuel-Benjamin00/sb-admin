import React, { useReducer } from 'react'
import { Button } from 'react-bootstrap'
import { Table } from 'react-bootstrap'

const data = {
    count: 0,
    products: [
        {
            name: "Coke",
            price: 50
        },
        {
            name: "Pepsi",
            price: 40
        },
        {
            name: "7up",
            price: 30
        }
    ]
}
function UseReducer() {

    const reducer = (state, action) => {
        switch (action.type) {
            case "increment": return { ...state, count: state.count + 1 }

            case "decrement": {
                if (state.count > 0)
                    return { ...state, count: state.count - 1 }
                else
                    return { ...state }
            }

            case "deleteProduct": {
                const newArray = [...state.products]
                newArray.splice(action.id,1)
                return {...state, products:newArray}
            }

            case "editProduct":{
                //complete it when required
            }
        }
    }


    const [state, dispatch] = useReducer(reducer, data)

    return <>
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">UseReducer</h1>
            </div>


            <Button onClick={() => dispatch({ type: "decrement" })}>-</Button>
            &nbsp;
            <span>{state.count}</span>
            &nbsp;
            <Button onClick={() => dispatch({ type: "increment" })}>+</Button>

            <div>
                <Table striped hover bordered>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            state.products.map((e, i) => {
                                return <tr key={i}>
                                    <td>{e.name}</td>
                                    <td>{e.price}</td>
                                    <td>
                                        <i className="fa-solid fa-pen-to-square pointer"  onClick={() => dispatch({ type: "editProduct", id:i})}></i>&nbsp; &nbsp;
                                        <i className="fa-solid fa-trash pointer pointer" onClick={() => dispatch({ type: "deleteProduct", id:i})}></i>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    </>

}



export default UseReducer