import React , {useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from "yup";
import { UserDataContext } from './context/UserContext';
import axios from 'axios';
import {toast} from 'react-toastify' 

function Create() {
  let navigate = useNavigate()
  let {API_URL} = useContext(UserDataContext)

  const UserSchema = Yup.object().shape({
    name: Yup.string().required("* Required"),
    username: Yup.string().required("* Required").min(3, "Minimum 3 characters required"),
    email: Yup.string().email("Invalid Email").required("* Required"),
    mobile: Yup.string().matches(/^\d{10}$/, "Invalid Mobile Number").required("* Required"),
    batch: Yup.string()
  })

  const handleCreate = async(values)=>{
    try {
      let res = await axios.post(API_URL,values)
      if(res.status===201){
        navigate("/dashboard")
      }
    } catch (error) {
      console.log(error)
      toast.error("Error Occurred")
    }
  }

  return (
    <>
      <div className="container-fluid">

        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Create User</h1>
        </div>

      
        <div className='row'>
          <Formik
            initialValues={
              {
                name: "",
                username: "",
                email: "",
                mobile: "",
                batch: "",
                password:""
              }
            }
            validationSchema={UserSchema}
            onSubmit={(values) => {handleCreate(values)}}

          >
            {({ errors, touched, handleChange, handleBlur, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name="name" placeholder="Enter Name" onChange={handleChange} onBlur={handleBlur} />
                  {errors.name && touched.name ? <div style={{ color: "red" }}>{errors.name}</div> : ""}
                </Form.Group>

                <Form.Group className="mb-3" >
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" name="username" placeholder="Enter Username" onChange={handleChange} onBlur={handleBlur} />
                  {errors.username && touched.username ? <div style={{ color: "red" }}>{errors.username}</div> : ""}
                </Form.Group>

                <Form.Group className="mb-3" >
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" placeholder="Enter Email" onChange={handleChange} onBlur={handleBlur} />
                  {errors.email && touched.email ? <div style={{ color: "red" }}>{errors.email}</div> : ""}
                </Form.Group>

                <Form.Group className="mb-3" >
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" placeholder="Enter Password" onChange={handleChange} onBlur={handleBlur} />
                  {errors.password && touched.password ? <div style={{ color: "red" }}>{errors.password}</div> : ""}
                </Form.Group>

                <Form.Group className="mb-3" >
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control type="text" name="mobile" placeholder="Enter Mobile Number" onChange={handleChange} onBlur={handleBlur} />
                  {errors.mobile && touched.mobile ? <div style={{ color: "red" }}>{errors.mobile}</div> : ""}
                </Form.Group>

                <Form.Group className="mb-3" >
                  <Form.Label>Batch</Form.Label>
                  <Form.Control type="text" name="batch" placeholder="Enter Batch" onChange={handleChange} onBlur={handleBlur} />
                  {errors.batch && touched.batch? <div style={{ color: "red" }}>{errors.batch}</div> : ""}
                </Form.Group>

                <Button variant="primary" type='submit'>
                  Submit
                </Button>
              </Form>
            )}

          </Formik>

        </div>
      </div>
    </>
  )
}

export default Create