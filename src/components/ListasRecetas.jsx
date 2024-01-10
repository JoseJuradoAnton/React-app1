import React, { useContext } from 'react'
import { RecetasContext } from '../context/RecetasContext'
import Receta from './Receta'



const ListasRecetas = () => {

    const { recetas } = useContext(RecetasContext)

    return (
        <div>
            {recetas.map(receta => (
                <Receta
                    key={receta.idDrink}
                    receta={receta}
                />
            ))}

        </div>
    )
}

export default ListasRecetas