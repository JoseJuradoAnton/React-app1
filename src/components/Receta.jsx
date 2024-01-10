import React from 'react'

const Receta = ({ receta }) => {
    return (
        <div className='col-md-4 mb-3'>
            <div className='card'>
                <h2 className='card-header'> {receta.strDrink} </h2>
                <img className='h-50px' src={receta.strDrinkThumb} alt="" />

                <div className='card-body'>
                    <button className='btn btn-block btn-primary'>Ver Receta</button>
                </div>

            </div>

        </div>
    )
}

export default Receta