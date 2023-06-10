import React, { useState , createContext, useReducer, useContext} from 'react'
// import { createContext } from 'react'
import { userinfoDetailsReducer } from './components/reducer'

export const UserInfo = createContext()

const Context = ({children}) => {
    // const [userDetails,setUserDetails] = useState('Prince')
    const [state,dispatch] = useReducer(userinfoDetailsReducer,{
      name:'Prashant',
      age:[1,2,3,4],
    })
  return (
    <UserInfo.Provider value={{state,dispatch}}>{children}</UserInfo.Provider>
  )
}

export default Context

export const userState=()=>{
    return useContext(UserInfo)
}