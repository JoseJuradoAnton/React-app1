import React from 'react'
import Header from './Header'
import Formulario from './Formulario'
import CategoriaProvider from '../context/CategoriaContext'
import ListasRecetas from './ListasRecetas'

const Bebidas = () => {



    return (


        <>
            <Header />
            <div className='px-5'>
                <Formulario />
            </div>
            <div className='flex justify-center'>
                <ListasRecetas />
            </div>
        </>

    )
}

export default Bebidas