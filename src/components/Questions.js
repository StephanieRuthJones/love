import React from 'react'


const Questions = (props) => {
    console.log(props)
    return (
        <div className="row">
            <div className="card">
                <div className="card-body">

                    <h5 className="card-title">Number: {props.number}</h5>

                    <h6 className="card-subtitle">{props.question}</h6>

                </div>
            </div>
        </div>
    )
}

export default Questions