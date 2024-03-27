import react from 'react'
import oopImga from '../asset/img/oops_4456159.png'
const Oop = ({ message }) => {
    return (
       <>
        <div className="flex flex-col 
            justify-center
            items-center w-5/6 mx-auto
            h-screen">
            <img src={oopImga} alt="" className=' h-64'/>
            <h1 className=' text-3xl text-red-600 font-semibold'>{message}</h1>
        </div>
       </>
    )
}

export default Oop;