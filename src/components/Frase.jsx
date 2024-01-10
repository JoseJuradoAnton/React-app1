import React from 'react'

const Frase = ({ frase }) => {
    return (
        <div className='px-8'>
            <h2 className='text-white font-bold text-2xl'> {frase.quote} </h2>
            <h4 className='font-bold text-gray-400 text-xl'> {frase.author} </h4>
        </div>
    )
}

export default Frase