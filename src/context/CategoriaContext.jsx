import React, { createContext, useEffect, useState } from 'react'

//crear context
export const CategoriaContext = createContext()

export const CategoriaProvider = (props) => {

    const [categorias, setCategorias] = useState([])

    useEffect(() => {

        const obtenerCategorias = async () => {


            try {
                const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"

                const datos = await fetch(url)
                const DatosApi = await datos.json()

                setCategorias(DatosApi.drinks)

            } catch (err) {
                console.log(err.message)
            }
        }
        obtenerCategorias()
    }, [])


    return <CategoriaContext.Provider
        value={{ categorias }}>
        {props.children}
    </CategoriaContext.Provider>

}

export default CategoriaProvider