import React from 'react'
import PropTypes from 'prop-types'
import '../App.css'
import './Button.css'
import { Link } from 'react-router-dom'


export default function Navbar(props) {

    const setDarkMode = () => {
        document.querySelector('body').setAttribute("data-theme", "dark")
        
    }
    const setLightMode = () => {
        document.querySelector('body').setAttribute("data-theme", "light")
    }
    const onToggle = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode();
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                        <div className='mode'>
                            <span className='mx-2'>Dark Mode</span>
                            <label className="switch">
                                <input type="checkbox" onChange={onToggle}/>
                                    <span className="slider"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title: "Set Titles"
}