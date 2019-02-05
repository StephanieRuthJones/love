import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from './GoogleAuth';


const Header = (props) => {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" style={{ color: '#FCFCF' }} href="#">10th Date</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav row">
                        <Link to="/" className="nav-item nav-link active">
                            Home
                        </Link>
                        <Link to="/response/new" className="nav-item nav-link">
                            Comment
                        </Link>
                    </div>
                </div>
                {/* <GoogleAuth /> */}
            </nav>
        </div >

    )
}

export default Header
