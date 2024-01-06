import {useState, useContext} from 'react'
import githubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'

function SearchUsers() {

  const [text, setText] = useState('')

  const {users, searchUser, deleteUsers} = useContext(githubContext)
  const {alertUsers} = useContext(AlertContext)

  const handleChange = (e) => setText(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text===''){
      alertUsers('The input is empty', 'error')
    }else{
      searchUser(text)
      setText('')
      alertUsers('Successful', 'success')
    }
  }

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input type="text" 
              className='input input-lg bg-gray-200 w-full pr-40 text-black' placeholder='Search' value={text} onChange={handleChange}/>
              <button className="absolute w-36 rounded-l-none top-0 right-0 btn btn-lg">GO</button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 &&  <div>
        <button  onClick={deleteUsers} className="btn btn-lg ghost-btn">Clear</button>
      </div>
}
     
    </div>
  )
}

export default SearchUsers