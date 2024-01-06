import {FaGithub} from 'react-icons/fa'

function About() {
  return (
    <div className="text-center">
      <h1 className="text-6xl mb-4">GitHub Finder</h1>
      <p className="mb-4 text-2xl font-ligth">React app that searches Github profiles and gives the profile details. Its part of the <a href="https://www.udemy.com/course/modern-react-front-to-back">
        {''}
        React Front to Back </a>{''}
      Udemy Coures
        <strong>
          <a href="https://traversymedia.com"> By Brad Traversy</a>
        </strong>
      </p>
      <p className=" text-lg text-gray-400">
        Version: <span className="text-white">1.1.0</span>
      </p>
      <p className=" text-lg text-gray-400 ">
        Layout By: 
        <div className='container mx-auto'>
          <a className="text-white underline  flex-none px-2 mx-2" href="https://github.com/teeTech32"><FaGithub className='inline text-3xl'/> Atanda Timothy</a>
        </div>
      </p>

    </div>
  )
}

export default About