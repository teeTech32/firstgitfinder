
import {FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

 function Navbar({title}) {

return <nav className="navbar mb-12 text-neutral-content bg-neutral shadow-lg ">
        <div className='container mx-auto'>
          <div className="flex-none px-2 mx-2">
            <FaGithub className='text-5xl inline pr-2'/>
            <Link to='/' className='text-lg align-meddle font-bold'>
            {title}
            </Link>
          </div>
          <div className="flex-1 px-2 mx-2">
            <div className="flex justify-end">
              <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
                Home
              </Link>
              <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
                About
              </Link>
            </div> 
          </div>
        </div>
      </nav>
 
   
}

Navbar.defaultProps={
  title:'Github Finder',
}

Navbar.propTypes = {
  title: PropTypes.string,
}
export default Navbar
