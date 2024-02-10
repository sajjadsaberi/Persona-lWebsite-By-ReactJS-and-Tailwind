import {React} from 'react';
import './footer.module.css';

function Footers() {
    return (
        <> 
        <footer className='flex justify-between items-center flex-row w-full h-auto bg-gray-900 mt-9 p-6 font-Iran text-white rtl'>
            <div className='w-40'>
                <a href="#">لینک های مرتبط</a>
                <ul>
                    <li>سایت های شخصی</li>
                    <li>سایت های شخصی</li>
                    <li>سایت های شخصی</li>
                    <li>سایت های شخصی</li>
                    <li>سایت های شخصی</li>
                </ul>
            </div>
            <div className='w-40'>
                <a href='#'>فهرست سایت</a>
                <ul>
                    <li>لینک های ویژه</li>
                    <li>لینک های ویژه</li>
                    <li>لینک های ویژه</li>
                    <li>لینک های ویژه</li>
                    <li>لینک های ویژه</li>
                </ul>
            </div>
            <div className='w-350xl'>
                <a href='#'>درباره ما</a>
                <p className='text-justify'>
                    در این قسمت یک متن کوتاه در خصوص نحوه راه اندازی این وبسایت و بیوگرافی شخصی سجاد صابری قرار داده می شود و کاربر می توان از طریق آن با با ما آشنا شود.
                </p>
            </div>
        </footer>
        </>
    )
}

export default Footers;
