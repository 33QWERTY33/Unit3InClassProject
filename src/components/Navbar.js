import React from 'react';

const Navbar = () => {
    return (
        <nav className="nav bg-light">
            <div className="d-flex w-100 justify-content-center">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/buttons">Buttons</Link>
                <Link className="nav-link" to="/forms">Forms</Link>
                <Link className="nav-link" to="/list">List</Link>
                <Link className="nav-link" to="/modal">Modal</Link>
            </div>
        </nav>
    );
};

export default Navbar;