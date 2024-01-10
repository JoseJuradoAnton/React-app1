import React from 'react'
import { Link } from 'react-router-dom'
import Bebidas from './Bebidas'
import logo from '../assets/logo.jpg'


const navbar = () => {
    return (
        <div className='shadown-md w-full fixed top-0 left-0' >
            <div className='flex md:flex items-center justify-between bg-white py-4 px-7 md:px-10'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>

                    <Link to={"/"} >
                        <img src={logo} alt="" className='w-12' />
                    </Link>
                </div>
                <ul className=' flex md:flex  md:items-center px-5'>
                    <li className='px-3 md:ml-8 text-2xl'>
                        <Link to={"/"}>
                            Home
                        </Link>
                    </li>

                    <Link to={"/Bebidas"} className='px-3 md:ml-8 text-2xl'>
                        Bebidas App
                    </Link>
                    <li className='px-3 md:ml-8 text-2xl'>
                        Project2
                    </li>
                    <li className='px-3 md:ml-8 text-2xl'>
                        Project3
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default navbar