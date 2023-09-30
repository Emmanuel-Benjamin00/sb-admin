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
import UserContext from "./components/context/UserContext"
import DashboardContext from "./components/context/DashboardContext"
import Home from "./components/Home"

function App() {

  return (
    <>
      <div id="wrapper">
        <BrowserRouter>

          <Routes>
            <Route path="/dashboard" element={
              <UserContext>
                <DashboardContext>
                  <Sidebar /> <Dashboard />
                </DashboardContext>
              </UserContext>} />
            <Route path="/create" element={
              <UserContext>
                <Sidebar /> <Create />
              </UserContext>} />
            <Route path="/edit/:id" element={
              <UserContext>
                <Sidebar />  <Edit />
              </UserContext>} />
            <Route path="nested-example" element={<><Sidebar /><NestExample /></>}>
              <Route path="accounts" element={<Accounts />} />
              <Route path="products" element={<Products />} />
              <Route path="receipts" element={<Receipts />} />
              <Route path="staff" element={<Staff />} />
            </Route>
            <Route path="usereducer" element={<><Sidebar /><UseReducer /></>} />
            <Route path="useref" element={<><Sidebar /><UseRef /></>} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
