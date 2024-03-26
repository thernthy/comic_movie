import react from 'react'

const Oop = ({ message }) => {
    return (
       <>
        <div className="flex flex-row 
            justify-center
            items-center 
            w-screen h-screen">
            <img src="#oop" alt="oop">
            <h1>{ message }</h1>
        </div>
       </>
    )
}

export default Oop;