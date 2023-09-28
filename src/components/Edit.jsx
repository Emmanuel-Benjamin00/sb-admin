import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';
import * as Yup from "yup";


function Edit({ datas, setDatas }) {
  const params = useParams()
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    username: "",
    mobile: "",
    batch: ""
  })
  let navigate = useNavigate()

  const UserSchema = Yup.object().shape({
    name: Yup.string().required("* Required"),
    username: Yup.string().required("* Required").min(3, "Minimum 3 characters required"),
    email: Yup.string().email("Invalid Email").required("* Required"),
    mobile: Yup.string().matches(/^\d{10}$/, "Invalid Mobile Number").required("* Required"),
    batch: Yup.string()
  })

  //useEffect without dependency array -
  //1. When component loads for the firsttime
  //2. When any of the state changes
  /* 
  useEffect(() => {
    console.log("Use Effect triggered")
  }
  )
  */

  //useEffect with empty dependency array -
  //1. When component loads for the firsttime
  /*
  useEffect(() => {
    console.log("Use Effect triggered")
  }, [])
 */

  //useEffect with dependency array -
  /*
    useEffect(() => {
      console.log("Use Effect triggered")
    }, [email,username])
  */
  const getData = (index) => {
    let newValues = { ...initialValues }
    newValues.name = datas[index].name
    newValues.email = datas[index].email
    newValues.mobile = datas[index].mobile
    newValues.username = datas[index].username
    newValues.batch = datas[index].batch
    console.log(newValues)
    setInitialValues(newValues)
  }

  useEffect(() => {
    if (Number(params.id) < datas.length) {
      getData(Number(params.id))
    }
    else {
      navigate('/dashboard')
    }
  }, [])

  return (
    <>
      <div className="container-fluid">

        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Edit User</h1>
        </div>

        <div className='row'>
          <Formik
            initialValues={initialValues}
            validationSchema={UserSchema}
            enableReinitialize={true}
            onSubmit={(value) => {
              let newArray = [...datas]
              newArray.splice(Number(params.id), 1, value)
              setDatas(newArray)
              navigate("dashboard")
            }}
          >

            {({ errors, touched, handleChange, handleBlur, handleSubmit, values }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" value={values.name} name="name" placeholder="Enter Name" onChange={handleChange} onBlur={handleBlur} />
                  {errors.name && touched.name ? <div style={{ color: "red" }}>{errors.name}</div> : ""}
                </Form.Group>

                <Form.Group className="mb-3" >
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" value={values.username} name="username" placeholder="Enter Username" onChange={handleChange} onBlur={handleBlur} />
                  {errors.username && touched.username ? <div style={{ color: "red" }}>{errors.username}</div> : ""}
                </Form.Group>

                <Form.Group className="mb-3" >
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" value={values.email} name="email" placeholder="Enter Email" onChange={handleChange} onBlur={handleBlur} />
                  {errors.email && touched.email ? <div style={{ color: "red" }}>{errors.email}</div> : ""}
                </Form.Group>

                <Form.Group className="mb-3" >
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control type="text" value={values.mobile} name="mobile" placeholder="Enter Mobile Number" onChange={handleChange} onBlur={handleBlur} />
                  {errors.mobile && touched.mobile ? <div style={{ color: "red" }}>{errors.mobile}</div> : ""}
                </Form.Group>

                <Form.Group className="mb-3" >
                  <Form.Label>Batch</Form.Label>
                  <Form.Control type="text" value={values.batch} name="batch" placeholder="Enter Batch" onChange={handleChange} onBlur={handleBlur} />
                  {errors.batch && touched.batch ? <div style={{ color: "red" }}>{errors.batch}</div> : ""}
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

export default Edit