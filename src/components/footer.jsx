import {React} from 'react';
import './footer.module.css';

function Footers() {
    return (
        <> 
        <footer className='flex justify-between items-center flex-row w-full h-auto bg-gray-900 mt-9 p-6 font-Iran text-white rtl'>
            <div className='w-40'>
                <a href="#" className='text-yellow-400 border-b-2 border-white pb-2.5 drop-shadow-dx10'>لینک های مرتبط</a>
                <ul className='mt-3.5'>
                    <li className='pt-1.5'>سایت های شخصی</li>
                    <li className='pt-1.5'>سایت های شخصی</li>
                    <li className='pt-1.5'>سایت های شخصی</li>
                    <li className='pt-1.5'>سایت های شخصی</li>
                </ul>
            </div>
            <div className='w-40'>
                <a href='#' className='text-yellow-400 border-b-2 border-white pb-2.5 drop-shadow-dx10'>فهرست سایت</a>
                <ul className='mt-3.5'>
                    <li className='pt-1.5'>لینک های ویژه</li>
                    <li className='pt-1.5'>لینک های ویژه</li>
                    <li className='pt-1.5'>لینک های ویژه</li>
                    <li className='pt-1.5'>لینک های ویژه</li>
                </ul>
            </div>
            <div className='w-350xl h-40'>
                <a href='#' className='text-yellow-400 border-b-2 border-white pb-2.5 drop-shadow-dx10'>درباره ما</a>
                <p className='text-justify mt-5 leading-9'>
                    در این قسمت یک متن کوتاه در خصوص نحوه راه اندازی این وبسایت و بیوگرافی شخصی سجاد صابری قرار داده می شود و کاربر می توان از طریق آن با با ما آشنا شود.
                </p>
            </div>
        </footer>
        </>
    )
}

export default Footers;
