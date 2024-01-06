const githubReducer = (state, action)=>{
  switch(action.Type){
    case 'GET_USERS':
      return ({
        ...state,
        users: action.payloader,
        loading: false
      })
    case 'GET_USER':
      return {
        ...state,
        user:action.payloader,
        loading: false
      }
    case 'GET_REPOS':
      return {
        ...state,
        repos:action.payloader,
        loading: false
      }
    case 'SET_LOADING' :
      return {
      ...state,
      loading: true
    }
    case 'DELETE_USERS' :
      return {
        ...state, 
        users:[]
    }
    default:
    return state

  }

}
export default githubReducer