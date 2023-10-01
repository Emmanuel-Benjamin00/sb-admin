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
import ProtectedRoutes from "./components/ProtectedRoutes"

function App() {

  return (
    <>
      <div id="wrapper">
        <BrowserRouter>

          <Routes>
            <Route path="/dashboard" element={
              <ProtectedRoutes>
                <UserContext>
                  <DashboardContext>
                    <Sidebar /> <Dashboard />
                  </DashboardContext>
                </UserContext>
              </ProtectedRoutes>
            } />
            <Route path="/create" element={
              <ProtectedRoutes>
                <UserContext>
                  <Sidebar /> <Create />
                </UserContext>
              </ProtectedRoutes>
            } />
            <Route path="/edit/:id" element={
              <ProtectedRoutes>
                <UserContext>
                  <Sidebar />  <Edit />
                </UserContext>
              </ProtectedRoutes>} />
            <Route path="nested-example" element={<><ProtectedRoutes><Sidebar /><NestExample /></ProtectedRoutes></>}>
              <Route path="accounts" element={<Accounts />} />
              <Route path="products" element={<Products />} />
              <Route path="receipts" element={<Receipts />} />
              <Route path="staff" element={<Staff />} />
            </Route>
            <Route path="usereducer" element={<> <ProtectedRoutes><Sidebar /><UseReducer /></ProtectedRoutes></>} />
            <Route path="useref" element={<> <ProtectedRoutes><Sidebar /><UseRef /></ProtectedRoutes></>} />
            <Route path="/" element={
              <UserContext>
                <Home />
              </UserContext>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
