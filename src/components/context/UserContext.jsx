import React , {useState} from 'react'
export const  UserDataContext = React.createContext(null)

function UserContext({children}) {
   
  return <UserDataContext.Provider value={{datas,setDatas}}>
    {children}
  </UserDataContext.Provider>
}

export default UserContext