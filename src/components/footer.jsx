import {React} from 'react';
import './footer.module.css';

function Footers() {
    return (
        <> 
        <footer className='flex justify-between items-center flex-row w-full h-auto bg-gray-900 mt-9 p-6 font-Iran text-white rtl'>
            <div className='w-40'>
                <a href="#" className='text-yellow-400 border-b-2 hover:text-yellow-400 border-white pb-2.5 drop-shadow-dx10'>لینک های مرتبط</a>
                <ul className="list-disc rtl list-inside mt-3">
                    <li className='pt-1.5'><a href="#" className='text-white hover:text-slate-500'>سایت های شخصی</a></li>
                    <li className='pt-1.5'><a href="#" className='text-white hover:text-slate-500'>سایت های شخصی</a></li>
                    <li className='pt-1.5'><a href="#" className='text-white hover:text-slate-500'>سایت های شخصی</a></li>
                    <li className='pt-1.5'><a href="#" className='text-white hover:text-slate-500'>سایت های شخصی</a></li>
                </ul>
            </div>
            <div className='w-40'>
                <a href='#' className='text-yellow-400 hover:text-yellow-400 border-b-2 border-white pb-2.5 drop-shadow-dx10'>فهرست سایت</a>
                <ul className=" list-disc rtl list-inside mt-3">
                    <li className='pt-1.5'><a href="#" className='text-white hover:text-slate-500'>لینک های ویژه</a></li>
                    <li className='pt-1.5'><a href="#" className='text-white hover:text-slate-500'>لینک های ویژه</a></li>
                    <li className='pt-1.5'><a href="#" className='text-white hover:text-slate-500'>لینک های ویژه</a></li>
                    <li className='pt-1.5'><a href="#" className='text-white hover:text-slate-500'>لینک های ویژه</a></li>
                </ul>
            </div>
            <div className='w-350xl h-40'>
                <a href='#' className='text-yellow-400 hover:text-yellow-400 border-b-2 border-white pb-2.5 drop-shadow-dx10'>درباره ما</a>
                <p className='text-justify mt-5 leading-9'>
                    در این قسمت یک متن کوتاه در خصوص نحوه راه اندازی این وبسایت و بیوگرافی شخصی سجاد صابری قرار داده می شود و کاربر می توان از طریق آن با با ما آشنا شود.
                </p>
            </div>
        </footer>
        <p className='mt-3 text-base text-gray-700'>
        Copy Right © 2023 - 2024 TermsFeed®. All rights reserved to Sajjad Saberi. 
        </p>
        </>
    )
}

export default Footers;
