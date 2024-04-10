import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../Appcontrollers/ContextProvider'
function RequestComic() {
  const {user} = useStateContext()
  const navigate  = useNavigate()
  useEffect(() => {
    if(!user){
      navigate('/')
    }
  }, [user, navigate])

  return (
    <><h2 className='text-center text-red-400'>Nex work</h2></>
  )
}

export default RequestComic