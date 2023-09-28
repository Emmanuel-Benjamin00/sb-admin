import React, { useReducer } from 'react'
import { Button } from 'react-bootstrap'

const data = {
    count: 0
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
        </div>
    </>

}



export default UseReducer