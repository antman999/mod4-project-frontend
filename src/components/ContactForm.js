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
        alert(`Successfully Submitted Message: ${this.state.inquiry}`)
        this.setState({
            email: '',
            inquiry: ''
        })
        
    }
    render(){
    return(
        <div className='contact-form'>
            <h3>We'd Love to Hear from You!</h3>
            <form >
                <label>Send us a message!</label>
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