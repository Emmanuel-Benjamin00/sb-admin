import Sidebar from "./components/sidebar"
import Dashboard from "./components/Dashboard"
import Create from "./components/Create"
import Edit from "./components/Edit"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NestExample from "./Nested Example"
import Accounts from "./Nested Example/Accounts"
import Products from "./Nested Example/Products"
import Receipts from "./Nested Example/Receipts"
import Staff from "./Nested Example/Staff"
import { useState } from "react"
import { Navigate } from "react-router-dom"
import UseRef from "./components/Hooks/UseRef"
import UseReducer from "./components/Hooks/UseReducer"


function App() {
  let [datas, setDatas] = useState([
    {
      name: "Vijay",
      username: "vijay123",
      email: "vijay@gmail.com",
      mobile: "1234567",
      batch: "B101"
    }, {
      name: "Joseph",
      username: "joseph123",
      email: "joseph@gmail.com",
      mobile: "123456778",
      batch: "B102"
    }
  ])

  return (
    <>
      <div id="wrapper">
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path="/dashboard" element={<Dashboard datas={datas} setDatas={setDatas} />} />
            <Route path="/create" element={<Create datas={datas} setDatas={setDatas} />} />
            <Route path="/edit/:id" element={<Edit datas={datas} setDatas={setDatas} />} />
            <Route path="nested-example" element={<NestExample />}>
              <Route path="accounts" element={<Accounts />} />
              <Route path="products" element={<Products />} />
              <Route path="receipts" element={<Receipts />} />
              <Route path="staff" element={<Staff />} />
            </Route>
            <Route path="usereducer" element={<UseReducer/>}/>
            <Route path="useref" element={<UseRef />} />
            <Route path="/*" element={<Navigate to="/dashboard" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
