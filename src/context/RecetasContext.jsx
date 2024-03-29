import React, { createContext, useEffect, useState } from 'react'

export const RecetasContext = createContext()

const RecetasProvider = (props) => {

    const [recetas, guardarRecetas] = useState([])
    const [busqueda, buscarRecetas] = useState({
        nombre: '',
        categoria: ''
    })

    const [consultar, guardarConsultar] = useState(false)
    const { nombre, categoria } = busqueda

    useEffect(() => {
        if (consultar) {
            const obtenerRecetas = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`

                const Data = await fetch(url)
                const dataApi = await Data.json()
                // console.log(dataApi.drinks)
                guardarRecetas(dataApi.drinks)
            }
            obtenerRecetas()
        }

    }, [busqueda])



    return (
        <RecetasContext.Provider
            value={{
                recetas,
                buscarRecetas,
                guardarConsultar
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    )
}

export default RecetasProvider