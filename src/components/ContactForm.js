import React from 'react'

const ContactForm = () => {
    return(
        <div>
            <h1>Contact Form</h1>
            <h3>Interested in a furry friend?</h3>
            <form>
                <label>Contact us!</label>
                <br></br>
                <input type="text" placeholder="email address" />
                <br></br>
                <textarea type="text" placeholder="inquiry here" />
                <br></br>
                <button type="button" class="btn btn-primary">Submit Inquiry</button>
            </form>
        </div>
    )
}

export default ContactForm