import {React} from 'react';
import './section.module.css';

function Sections() {
    return (
        <> 
        <main className='flex justify-between items-center mt-6'>
            <div className='bg-slate-200 w-60 h-auto rounded-md shadow-11xxxl pb-5'>
                <p className=' bg-stone-800 text-white h-12 pt-3 rounded-t-md rounded-b-none font-Iran'>فهرست ها</p>
                <div className='font-Iran flex justify-end items-center w-auto h-auto mt-5 mr-10'>
                    <ul>
                        <li>
                            <a href='#' className="relative after:content-link after:absolute after:w-3 after:h-3 after:mt-1 after:ml-1">سر عنوان</a>
                            <ul className=' list-disc rtl list-inside'>
                                <li>عنوان</li>
                                <li>عنوان</li>
                                <li>عنوان</li>
                            </ul>
                        </li>
                        <li className='mt-4'>
                        <a href='#' className="relative after:content-link after:absolute after:w-3 after:h-3 after:mt-1 after:ml-1">سر عنوان</a>
                            <ul className=' list-disc rtl list-inside'>
                                <li>عنوان</li>
                                <li>عنوان</li>
                                <li>عنوان</li>
                            </ul>
                        </li>
                        <li className='mt-4'>
                        <a href='#' className="relative after:content-link after:absolute after:w-3 after:h-3 after:mt-1 after:ml-1">سر عنوان</a>
                            <ul className=' list-disc rtl list-inside'>
                                <li>عنوان</li>
                                <li>عنوان</li>
                                <li>عنوان</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='bg-slate-200 w-550xl h-426xl rounded-md shadow-11xxxl'>
                <p className=' bg-stone-800 text-white h-12 pt-3 rounded-t-md rounded-b-none font-Iran'>عنوان پست های انتشار داده شده در وبسایت</p>
                <div className='flex flex-row gap-4 font-Iran text-12pxl font-light justify-between items-center px-5 py-1.5 m-310pxl bg-slate-300 rounded-b-md'>
                <button>ادامه مطلب</button>
                    <a href='#' className='text-stone-800 hover:text-black'>نویسنده : سجاد صابری</a>
                    <a href='#' className='text-stone-800 hover:text-black'>تاریخ انتشار : 1402/07/25</a>
                    <a href="#" className='text-stone-800 hover:text-black'>تعداد نظرات</a>
                </div>
            </div>
            <div className=' bg-slate-200 w-60 h-426xl rounded-md shadow-11xxxl'>
                <p className=' bg-stone-800 text-white h-12 pt-3 rounded-t-md rounded-b-none font-Iran'>برترین ها</p>
                <div className='font-Iran flex justify-end items-center w-auto h-auto mt-5 mr-10'>
                    <ul>
                        <li>
                            <a href='#' className="relative after:content-link after:absolute after:w-3 after:h-3 after:mt-1 after:ml-1">سر عنوان</a>
                            <ul className=' list-disc rtl list-inside'>
                                <li>عنوان</li>
                                <li>عنوان</li>
                                <li>عنوان</li>
                            </ul>
                        </li>
                        <li className='mt-4'>
                        <a href='#' className="relative after:content-link after:absolute after:w-3 after:h-3 after:mt-1 after:ml-1">سر عنوان</a>
                            <ul className=' list-disc rtl list-inside'>
                                <li>عنوان</li>
                                <li>عنوان</li>
                                <li>عنوان</li>
                            </ul>
                        </li>
                        <li className='mt-4'>
                        <a href='#' className="relative after:content-link after:absolute after:w-3 after:h-3 after:mt-1 after:ml-1">سر عنوان</a>
                            <ul className=' list-disc rtl list-inside'>
                                <li>عنوان</li>
                                <li>عنوان</li>
                                <li>عنوان</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
        </>
    )
}

export default Sections;
