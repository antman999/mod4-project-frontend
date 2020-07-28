import React from 'react'

class ContactForm extends React.Component{

    state = {
        email: '',
        inquiry: ''
    }

    changeHandler = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
    }
  
    submitHandler = () => {
        alert(`Successfully Submitted ${this.state.inquiry}`)
        this.setState({
            email: '',
            inquiry: ''
        })
        
    }
    render(){
    return(
        <div className='contact-form'>
            <h1>Contact Form</h1>
            <form >
                <label>Contact us!</label>
                <br></br>
                <input onChange={this.changeHandler} type="text" name='email' value={this.state.email}placeholder="email address" />
                <br></br>
                <textarea onChange={this.changeHandler} type="text" name='inquiry' value={this.state.inquiry} placeholder="inquiry here" />
                <br></br>
                <button onClick={this.submitHandler} type="button" class="btn btn-primary">Submit Inquiry</button>
            </form>
        </div>
    )
    }
}

export default ContactForm