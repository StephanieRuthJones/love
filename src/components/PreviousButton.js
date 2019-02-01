import React from 'react'
import Button from 'react-bootstrap/Button';

const PreviousButton = (props) => {
    console.log(props)
    return (
        <Button className="btn" type="button" onClick={() => props.nextQuestion(false)}>Previous</Button>
    )
}

export default PreviousButton