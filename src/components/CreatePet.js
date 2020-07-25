import React from 'react'

class CreatePet extends React.Component {
    render(){
        return(
            <div>
                <h3 className="create-header">Create an Adoption Listing</h3>
                <form className="create-form">
                    <input type="text" placeholder="name"/><br></br>
                    <input type="text" placeholder="pet type"/><br></br>
                    <input type="text" placeholder="breed"/><br></br>
                    <input type="number" placeholder="age"/><br></br>
                    <input type="text" placeholder="sex"/><br></br>
                    <input type="text" placeholder="country"/><br></br>
                    <input type="text" placeholder="zipcode"/><br></br>
                    <input type="text" placeholder="img url"/><br></br>
                    <button type='button' class='btn btn-primary'>Submit</button>
                </form>
            </div>
        )
    }
}

export default CreatePet