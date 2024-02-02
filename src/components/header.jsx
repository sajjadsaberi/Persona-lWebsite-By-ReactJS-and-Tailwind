import {React} from 'react'
import './header.module.css'

function Headers() {
    return (
        <> 
    <header>
        <p className='absolute font-Iran text-5xl text-white font-bold m-10tl drop-shadow-dx10'>مهندس سجاد صابری</p>
        <img src='./src/images/Header.jpg' alt='Header' className='h-72 w-10xl'/>
    </header>
    <nav className='bg-gray-900 flex items-center justify-between gap-96 shadow-5xxl'>
        <span className='text-gray-950 pt-0 pb-8 pl-3.5 font-Iran text-sm'><img className='absolute z-20 mt-1.5 ml-1.5 cursor-grab' src='./src/images/Search.png' width="20px" height="20px" alt='Search'/><input type='text' placeholder='جست و جو ...' className='absolute w-48 h-8 outline-none rtl pr-1 z-10' required /></span>
        <ul className='list-none p-2 m-0 flex'>
            <li className='mr-5 transition ease-in-out delay-150 hover:bg-gray-800  hover:transition hover:ease-in-out hover:delay-150'><a href="#" className='inline-block text-white text-center py-2 px-2 no-underline font-Iran cursor-pointer hover:text-white'>ارتباط با ما</a></li>
            <li className='mr-5 transition ease-in-out delay-150 hover:bg-gray-800  hover:transition hover:ease-in-out hover:delay-150'><a href="#" className='inline-block text-white text-center py-2 px-2 no-underline font-Iran cursor-pointer hover:text-white'>درباره ما</a></li>
            <li className='mr-5 transition ease-in-out delay-150 hover:bg-gray-800  hover:transition hover:ease-in-out hover:delay-150'><a href="#" className='inline-block text-white text-center py-2 px-2 no-underline font-Iran cursor-pointer hover:text-white'>فروشگاه</a></li>
            <li className='mr-5 transition ease-in-out delay-150 hover:bg-gray-800  hover:transition hover:ease-in-out hover:delay-150'><a href="#" className='inline-block text-white text-center py-2 px-2 no-underline font-Iran cursor-pointer hover:text-white'>صفحه اصلی</a></li>
        </ul>
    </nav>
        </>
    )
}

export default Headers;
