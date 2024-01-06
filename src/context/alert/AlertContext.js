import { createContext, useReducer } from "react";
import alertReducer from './AlertReducer'

const AlertContext = createContext()

export const AlertProvider = ({children}) =>{
  
  const initialState = null

  const [state, dispatch] = useReducer(alertReducer, initialState)

 const alertUsers = (msg, type) => {
  
  dispatch({
    type:"ALERT_USERS",
    payloader:{msg, type}
  })
setTimeout(()=>{dispatch({type:'REMOVE_ALERT'})},3000)
 }

 return <AlertContext.Provider value={{
              alert:state, 
              alertUsers
              }}>
          {children}
       </AlertContext.Provider>

}
export default AlertContext

