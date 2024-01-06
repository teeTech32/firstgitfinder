import {FaCodepen, FaStore, FaUserFriends, FaUsers} from 'react-icons/fa'
import { useEffect, useContext } from 'react'
import {useParams, Link} from 'react-router-dom'
import githubContext from '../context/github/GithubContext'
import Spinner from '../components/Layouts/Spinner'
import UserRepoList from '../components/repo/UserRepoList'

function User() {
  const params = useParams()
  const {user,repo, getRepos, getUser, loading} = useContext(githubContext)

  useEffect(()=>{
    getUser(params.login)
    getRepos(params.login)
    // eslint-disable-next-line
  },[])

  const {name, html_url, type, bio, avatar_url, hireable, login, followers, following, public_repos, public_gists, location, blog, twitter_username  } = user

  if(loading){
    return <Spinner/>
  }

  return (
    <>
     <div className="w-full mx-auto lg:w-10/12">
      <div className="mb-4">
        <Link to='/' className='btn btn-ghost'>
          Back to  search
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mb-8 md:gap-8">
          <div className=" custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg card image-full ">
              <figure>
                <img src={avatar_url} alt="" />
              </figure>
              <div className="card-body pl-2 ">
                <h2 className="card-title mb-0">
                  {name}
                </h2>
                <p>{login}</p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title">
                {name}
                <div className="badge badge-success mr-1 ml-2">
                  {type}
                </div>
                {hireable && (<div className='mx-1 badge badge-info'>Hireable</div>)}
              </h1>
              <p className="font-semibold mt-4">
                {bio}
              </p>
              <div className="card-actions mt-6">
                <a href={html_url} target='_blank' rel='noreferrer' className='btn btn-outline' >Visit Github Profile</a>
              </div>
            </div>
            <div className="w-full rounded-lg shadow-md bg-base-100 stats">
              {location && ( 
                <div className="stat">
                  <div className="stat-title text-md font-bold">
                    Location
                  </div>
                  <div className="stat-value text-lg">
                    {location}
                  </div>
                </div>
              )}
               {twitter_username && ( 
                <div className="stat">
                  <div className="stat-title text-md font-bold">
                    Twitter
                  </div>
                  <div className="stat-value text-lg">
                   <a href={`https://twitter.com/${twitter_username}`} target='_blank' rel='noreferrer'  >{twitter_username}</a>
                  </div>
                </div>
              )}
               {blog && ( 
                <div className="stat">
                  <div className="stat-title text-md">
                    Blog
                  </div>
                  <div className="stat-value text-lg">
                   <a href={`https://${blog}`} target='_blank' rel='noreferrer'>{blog}</a> 
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>  
        <div className="w-full bg-base-100 py-5 mr-6 rounded-lg shadow-md stats">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUsers className='text-3xl md:text-5xl'/>
            </div>
            <div className="stat-title pr-5 font-bold">Followers</div>
            <div className="stat-value pr-5 md:text-4xl ">{followers}</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUserFriends className='text-3xl md:text-5xl'/>
            </div>
            <div className="stat-title pr-5 font-bold">Following</div>
            <div className="stat-value pr-5 md:text-4xl ">{following}</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaStore className='text-3xl md:text-5xl'/>
            </div>
            <div className="stat-title pr-5 font-bold">Public Repos</div>
            <div className="stat-value pr-5 md:text-4xl ">{public_repos}</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaCodepen className='text-3xl md:text-5xl'/>
            </div>
            <div className="stat-title pr-5 font-bold">Public Gists</div>
            <div className="stat-value pr-5 md:text-4xl ">{public_gists}</div>
          </div>   
        </div>
        <UserRepoList repos = {repo}/>
     </div>
    </>
  )
}

export default User