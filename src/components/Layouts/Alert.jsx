import {useContext} from 'react'
import AlertContext from '../../context/alert/AlertContext'
import { FaCircleCheck, FaCircleXmark } from 'react-icons/fa6'


function Alert() {
  const {alert} = useContext(AlertContext)

  return (
    alert !== null && (
      <p className="flex text-start mb-4 space-x-2">
        {alert.type==='error' ? (

            <p className="flex-1 text-base text-error font-semibold leading-7">
              <FaCircleXmark className='inline text-3xl mr-2'/>
               <strong>{alert.msg}</strong>
            </p> 
        ) : (
             <p className='flex-1 text-base text-success     font-semibold leading-7 text-md '>
              <FaCircleCheck className='inline text-3xl mr-2'/>
              <strong>{alert.msg}</strong>
             </p>
             )}
   
      </p>
    )
  )
}

export default Alert