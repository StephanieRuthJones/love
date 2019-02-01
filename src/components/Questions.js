import React from 'react'


const Questions = (props) => {
    console.log(props)
    return (
        <div className="row justify-content-center">
            <div className="card">
                <div className="card-body justify-content-center">
                    <div>
                        <h5 className="card-title">Number: {props.number}</h5>
                    </div>
                    <div>
                        <h6 className="card-subtitle mb-2">{props.question}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions