import { useEffect, useState } from 'react'
import Navbar from './navbar'
import Frase from './Frase'

function Home() {

    const [frase, setfrase] = useState([])

    useEffect(() => {
        consultarApi()
    }, [])

    const consultarApi = async () => {
        const api = await fetch("https://api.breakingbadquotes.xyz/v1/quotes")
        const respuesta = await api.json()
        setfrase(respuesta[0])
    }



    return (
        <>
            <div className='flex flex-col bg-green-600 w-full shadow h-screen justify-center items-center'>
                <Frase
                    frase={frase}
                />
                <button
                    onClick={consultarApi}
                    className='bg-green-700 hover:bg-green-800 font-medium text-white rounded-2xl py-5 p-2' >
                    ObtenerDatos</button>
            </div>
        </>
    )
}

export default Home
