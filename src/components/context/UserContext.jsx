import React, { useState} from 'react'

export const UserDataContext = React.createContext(null)
function UserContext({ children }) {
  const API_URL = "https://6516655c09e3260018c9b408.mockapi.io/api/v1/users"
  return <UserDataContext.Provider value={{API_URL}}>
    {children}
  </UserDataContext.Provider>
}

export default UserContext