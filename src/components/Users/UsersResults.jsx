import { useContext } from "react"
import Spinner from "../Layouts/Spinner"
import UserItems from "./UserItems"
import githubContext from "../../context/github/GithubContext"

 function UsersResults() {
  const {users, loading } = useContext(githubContext)
 
  if(! loading){
    return (
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {users.map((user)=>(
          <UserItems key = {user.id} user={user}/>
        ))}
      </div>
    )
  }else{
    return <Spinner/>
  }
 
}
export default UsersResults
