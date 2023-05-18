import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AUthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut, currentUser } = useContext(AUthContext)
    const handleLogout = () => {
        logOut()
    }
    const navmenu =
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            {/* <li><Link to='/registration'>Registration</Link></li> */}
            {user ?
                <><li><Link ><button onClick={handleLogout}>Log out</button></Link></li> <li><Link to='/addproduct'>Add Toys</Link></li> <li><Link to='/mytoys'>My toys</Link></li> </> : <li><Link to='/login'>Login</Link></li>}

        </>

    return (
        <div>
            <div className="navbar bg-gray-500 h-28 mb-10 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-500 rounded-box w-52">
                            {navmenu}
                        </ul>
                    </div>
                    <img className='w-14 h-14
                rounded-lg' src="https://media.istockphoto.com/id/1395298574/photo/a-surprise-box-surrounded-by-balloons-and-ribbon-on-a-purple-background-3d-rendering.jpg?b=1&s=170667a&w=0&k=20&c=1_6JvJwlbo3x_ATZwMl8-CYutPuZY6oYbvQz5GCXVxo=" alt="" />
                    <h2 className='p-4 font-bold text-2xl'>Toy's World</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navmenu}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <button className='btn btn-outline btn-warning'>Appointment</button>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;