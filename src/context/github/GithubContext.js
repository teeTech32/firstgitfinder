import { createContext,  useReducer} from "react";
import githubReducer from "./GithubReducer";

const githubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;


export const GithubProvider = ({children}) =>{
  const initialState = {
    users: [],
    user:{},
    repos:[],
    loading:false
  }
 
  const [state, dispatch] = useReducer(githubReducer, initialState)

  const searchUser = async(text)=>{
    setLoading()
    const params = new URLSearchParams({
      q: text
    })
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers:{
        Authorization:`token ${GITHUB_TOKEN}`
      }
    })
    const {items} = await response.json()
    
    dispatch({
      Type: 'GET_USERS',
      payloader: items
    })
  }
  
  const getUser = async(login)=>{
    setLoading()
    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers:{
        Authorization:`token ${GITHUB_TOKEN}`
      }
    })

    if(response.status=== 404){
      window.location='/Notfound'
    }else{
      const data = await response.json()
    
      dispatch({
        Type: 'GET_USER',
        payloader: data
      })
    }
   
  }

  const getRepos = async(login)=>{
    setLoading()
   const params = new URLSearchParams({
    sort:'created',
    per_page: 10,
   })
    const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
      headers:{
        Authorization:`token ${GITHUB_TOKEN}`
      }
    })
    const data = await response.json()
    console.log(data)
    
    dispatch({
      Type: 'GET_REPOS',
      payloader: data
    })
  }
  

  const setLoading = () => dispatch({
    Type: 'SET_LOADING'
  })

  const deleteUsers = () => dispatch({
    Type:'DELETE_USERS'
  })
    
  return(
    <githubContext.Provider value={{
      users: state.users,
      user:state.user,
      repo:state.repos,
      loading: state.loading,
      searchUser,
      getUser,
      getRepos,
      deleteUsers
    }}>
     {children}
    </githubContext.Provider>
  )
  
}

export default githubContext