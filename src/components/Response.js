import React from 'react'

const Response = () => {

    return (
        <div className="response-container" >
            <form action="action_page.php">

                <label htmlFor="fname">User Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name..." />


                <label htmlFor="subject">Comment: </label>
                <textarea id="subject" name="subject" placeholder="Write something..."></textarea>

                <input type="submit" value="Submit" />

            </form>
        </div>

    )
}

export default Response