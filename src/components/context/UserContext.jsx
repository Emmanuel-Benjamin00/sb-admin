import React, { useState} from 'react'

export const UserDataContext = React.createContext(null)
function UserContext({ children }) {
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

  return <UserDataContext.Provider value={{ datas, setDatas }}>
    {children}
  </UserDataContext.Provider>
}

export default UserContext