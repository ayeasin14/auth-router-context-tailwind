import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const { user } = useContext(AuthContext);
    // console.log('context:', user);
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link className="btn btn-ghost normal-case text-xl">Auth Route Context</Link>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Home</Link>
                <Link to='/login' className="btn btn-ghost normal-case text-xl">Log In</Link>
                <Link to='/register' className="btn btn-ghost normal-case text-xl">Register</Link>
                {user?.email && <span>Welcome, {user.email} </span>}
                <button className="btn mx-3 btn-sm">Sign Out</button>
            </div>
        </div>
    );
};

export default Header;