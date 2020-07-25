import React from 'react'

class Login extends React.Component {
    render(){
        return(
            <div>
              <form>
                  <input type="text" placeholder="Username" />
                  <input type="password" placeholder="Password" />
                  <button type='button' class='btn btn-primary'>Login</button>
              </form>
            </div>
        )
    }
}

export default Login