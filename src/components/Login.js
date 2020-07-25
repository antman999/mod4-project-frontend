import React from 'react'

class Login extends React.Component {
    render(){
        return(
            <div>
                <h3 className="login-header">Login!</h3>
              <form className="login-form">
                  <input type="text" placeholder="Username" /><br></br>
                  <input type="password" placeholder="Password" /><br></br>
                  <button type='button' class='btn btn-primary'>Login</button>
              </form>
            </div>
        )
    }
}

export default Login