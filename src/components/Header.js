import { Link } from 'gatsby'
import React from 'react'

export default function Header() {
    return (
        <div className="link">
            <h2>Static website</h2>
            <nav >
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Product">Products</Link>
            </nav>
        </div>
    )
}
