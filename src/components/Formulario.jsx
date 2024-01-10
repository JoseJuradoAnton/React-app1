import React, { useContext, useState } from 'react'

import { CategoriaContext } from '../context/CategoriaContext'
import { RecetasContext } from '../context/RecetasContext'

const Formulario = () => {

    const [obtener, setObtener] = useState({
        nombre: '',
        categoria: '',

    })

    const { categorias } = useContext(CategoriaContext)
    const { buscarRecetas, guardarConsultar } = useContext(RecetasContext)

    const obtenerDatos = e => {
        setObtener({
            ...obtener,
            [e.target.name]: e.target.value
        })
    }


    return (

        <div className=''>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    buscarRecetas(obtener)
                    guardarConsultar(true)
                }}
            >

                <div className='flex justify-center py-5 text-gray-400 font-bold text-2xl'>Buscar Bebida
                </div>
                <div className='py-5 flex justify-center'>
                    <div className='px-5'>
                        <input type="text"
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight'
                            name='nombre'
                            placeholder='Buscar por Ingrediente'
                            onChange={obtenerDatos}
                        />
                    </div>
                    <div className='px-5'>
                        <select
                            name="categoria"
                            onChange={obtenerDatos}
                            className='appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-1 px-4 pr-8 focus:outline-none'>
                            <option value="">
                                -- Seleccione Categoria --
                            </option>
                            {categorias.map(categoria => (
                                <option
                                    key={categoria.strCategory}
                                    value={categoria.strCategory}
                                > {categoria.strCategory} </option>
                            ))}
                        </select>
                    </div>
                    <div className='px-5'>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Buscar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Formulario