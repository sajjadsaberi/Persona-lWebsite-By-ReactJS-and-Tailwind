import {React} from 'react'
import './section.module.css'

function Sections() {
    return (
        <> 
        <main className='flex justify-between items-center mt-6'>
            <div className='bg-slate-200 w-60 h-96 rounded-md shadow-11xxxl'>
                <p className=' bg-stone-800 text-white h-12 pt-3 rounded-t-md rounded-b-none font-Iran'>فهرست ها</p>
            </div>
            <div className='bg-slate-200 w-550xl h-96 rounded-md shadow-11xxxl'>
                <p className=' bg-stone-800 text-white h-12 pt-3 rounded-t-md rounded-b-none font-Iran'>فهرست ها</p>
            </div>
            <div className=' bg-slate-200 w-60 h-96 rounded-md shadow-11xxxl'>
                <p className=' bg-stone-800 text-white h-12 pt-3 rounded-t-md rounded-b-none font-Iran'>فهرست ها</p>
            </div>
        </main>
        </>
    )
}

export default Sections;
