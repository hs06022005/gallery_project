import { NavLink } from "react-router-dom";

const Navbar=()=>{
    const linkStyle = ({ isActive }) => isActive 
        ? 'text-white bg-blue-400 px-3 py-2 rounded-2xl' 
        : 'text-black bg-white px-3 py-2 rounded-2xl';
    return (
        <div className='flex justify-between items-center align-center fixed top-0 left-0 w-full h-20 rounded px-10 bg-linear-to-r from-amber-400 to-pink-500 text-white z-50 '>
            <h1 className='text-2xl text-white font-bold'>Gallery App</h1>

            <nav className='ml-10 gap-2 flex'>
                <NavLink to="/" className={linkStyle}>Home</NavLink>
                <NavLink to="/Image" className={linkStyle}>Image</NavLink>
                <NavLink to="/Contact" className={linkStyle}>Contact</NavLink>
            </nav>
        </div>
    )
}

export default Navbar;