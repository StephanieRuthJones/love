import React from 'react'
import Button from 'react-bootstrap/Button';

const PreviousButton = (props) => {
    console.log(props)
    return (

        <Button className="btn btn-primary" type="button" onClick={() => props.nextQuestion(true)}>Next</Button>
    )
}

export default PreviousButton