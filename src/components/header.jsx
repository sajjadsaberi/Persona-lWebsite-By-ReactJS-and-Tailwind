import {React} from 'react'
import './header.module.css'

function Headers() {
    return (
        <> 
    <div className='flex items-center justify-between h-12'>
        <div className='flex flex-row justify-center items-center gap-3'>
            <a href='#'><img src='./src/images/instagram.png' width='32px' height='32px' alt="instagram" /></a>
            <a href='#'><img src='./src/images/youtube.png' width='32px' height='32px' alt="youtube" /></a>
            <a href='#'><img src='./src/images/telegram.png' width='32px' height='32px' alt="telegram" /></a>
            <a href='#'><img src='./src/images/fb-messenger.png' width='32px' height='32px' alt="facebook" /></a>
            <a href='#'><img src='./src/images/whatsapp.png' width='32px' height='32px' alt="whatsapp" /></a>
        </div>
        <div className='font-Iran rtl text-zinc-900'>
            <p><a href='#' className='pt-1.5 pr-3 pb-2 pl-3 rounded-md text-white bg-red-500 hover:text-zinc-100'>ثبت نام / ورود به سایت</a></p>
        </div>
    </div>
    <header>
    <div className='box h-auto mt-5 ml-5 flex justify-center items-center gap-6 flex-wrap flex-row absolute'>
            <span className='w-40 h-28 bg-slate-100 border-2 border-gray-300 shadow-8xxl pt-9'><a href='#' className='font-Iran text-2xl text-neutral-800 font-normal'>صفحه اصلی</a></span>
            <span className='w-40 h-28 bg-slate-100 border-2 border-gray-300 shadow-8xxl pt-9'><a href='#' className='font-Iran text-2xl text-neutral-800 font-normal'>صفحه اصلی</a></span>
            <span className='w-40 h-28 bg-slate-100 border-2 border-gray-300 shadow-8xxl pt-9'><a href='#' className='font-Iran text-2xl text-neutral-800 font-normal'>صفحه اصلی</a></span>
            <span className='w-40 h-28 bg-slate-100 border-2 border-gray-300 shadow-8xxl pt-9'><a href='#' className='font-Iran text-2xl text-neutral-800 font-normal'>صفحه اصلی</a></span>
        </div>
        <p className='absolute font-Iran text-5xl text-white font-bold m-10tl drop-shadow-dx10'>مهندس سجاد صابری</p>
        <p className='absolute font-Iran text-base text-white font-bold m-11tl drop-shadow-dx10'>طراح و توسعه دهنده فرانت اند و طراح رابط کاربری</p>
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
