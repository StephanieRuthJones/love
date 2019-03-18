import React from 'react'
// import { Link } from 'react-router-dom'
// import GoogleAuth from './GoogleAuth';


const Header = (props) => {
    return (
        <div className="icon-bar">
            <div className="row">
                <a href="https://www.nytimes.com/2015/01/11/fashion/no-37-big-wedding-or-small.html" target="_blank" rel="noopener noreferrer"><i className="far fa-heart icon"></i></a>
                <div className="icon-links">
                    <a href="http://www.stephaniejoneswebdev.com/" target="_blank" rel="noopener noreferrer"> <i
                        className="fa fa-home icon"></i></a>
                    <i className="far fa-comment icon"></i>
                </div>
            </div >
        </div>

    )
}

export default Header
