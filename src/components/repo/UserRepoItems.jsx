import PropTypes from 'prop-types'
import {FaEye, FaLink, FaStar, FaInfo, FaUtensils,} from 'react-icons/fa'

function UserRepoItems({repo}) {
  const {name, description, watchers_count, stargazers_count, fork, open_issues, html_url}= repo
  return (
    <div className='card rounded-md bg-gray-800 hover:bg-gray-900 mb-2'>
      <div className="card-body">
        <h3 className="text-lg font-semibold mb-3">
          <a href={html_url}>
            <FaLink className='inline mr-1'/>{name}
          </a>
        </h3>
        <p className="mb-3">{description}</p>
        <div>
          <div className="badge badge-lg badge-info mr-2">
            <FaEye className='mr-1'/>{watchers_count}
          </div>
          <div className="badge badge-lg badge-success mr-2">
            <FaStar className='mr-1'/>{stargazers_count}
          </div>
          <div className="badge badge-lg badge-error mr-2">
            <FaInfo className='mr-1'/>{open_issues}
          </div>
          <div className="badge badge-lg badge-warning mr-2">
            <FaUtensils className='mr-1'/>{fork}
          </div>
        </div>
      </div>
    </div>
  )
}

UserRepoItems.prototype={
  repo: PropTypes.object
}

export default UserRepoItems