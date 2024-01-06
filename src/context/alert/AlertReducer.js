const alertReducer = (state, action) => {
  switch(action.type){
    case 'ALERT_USERS' :
      return action.payloader
    case 'REMOVE_ALERT' :
      return null
    default:
      return state
    
  }
}
export default alertReducer