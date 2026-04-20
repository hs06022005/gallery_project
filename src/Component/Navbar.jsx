import { Link } from 'react-router-dom'

const Navbar=()=>{
    return (
        <div className='flex justify-between items-center align-center fixed top-0 left-0 w-full h-20 rounded px-10 bg-gradient-to-r from-amber-400 to-pink-500 text-white z-50 '>
            <h1 className='text-2xl text-white font-bold'>Gallery App</h1>

            <nav className='ml-10'>
                <Link to ="/" className='text-white font-bold text-lg mx-4 hover:underline hover:text-rose-800'>Home</Link>
                <Link to="/Image" className='text-white font-bold text-lg mx-4 hover:underline hover:text-rose-800'>Image</Link>
                <Link to="/Contact" className='text-white font-bold text-lg mx-4 hover:underline hover:text-rose-800'>Contact</Link>
            </nav>
        </div>
    )
}

export default Navbar;