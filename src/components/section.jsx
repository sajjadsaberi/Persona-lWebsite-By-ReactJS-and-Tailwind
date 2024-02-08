import {React} from 'react';
import './section.module.css';

function Sections() {
    return (
        <> 
        <main className='flex justify-between items-center mt-6'>
            <div className='bg-slate-200 w-60 h-96 rounded-md shadow-11xxxl'>
                <p className=' bg-stone-800 text-white h-12 pt-3 rounded-t-md rounded-b-none font-Iran'>فهرست ها</p>
                <div className='font-Iran flex justify-end items-center w-auto h-auto mt-5 mr-8'>
                    <ul>
                        <li>
                            <a href='#' className="relative after:content-link after:absolute after:w-3 after:h-3">سر عنوان</a>
                            <ul>
                                <li>عنوان</li>
                                <li>عنوان</li>
                                <li>عنوان</li>
                            </ul>
                        </li>
                        <li>
                            <a href='#' >سر عنوان</a>
                            <ul>
                                <li>عنوان</li>
                                <li>عنوان</li>
                                <li>عنوان</li>
                            </ul>
                        </li>
                        <li>
                            <a href='#' >سر عنوان</a>
                            <ul>
                                <li>عنوان</li>
                                <li>عنوان</li>
                                <li>عنوان</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='bg-slate-200 w-550xl h-96 rounded-md shadow-11xxxl'>
                <p className=' bg-stone-800 text-white h-12 pt-3 rounded-t-md rounded-b-none font-Iran'>عنوان پست های انتشار داده شده در وبسایت</p>
            </div>
            <div className=' bg-slate-200 w-60 h-96 rounded-md shadow-11xxxl'>
                <p className=' bg-stone-800 text-white h-12 pt-3 rounded-t-md rounded-b-none font-Iran'>برترین ها</p>
            </div>
        </main>
        </>
    )
}

export default Sections;
