import React from 'react'

class CreatePet extends React.Component {

    state = {
       name: '',
       pet_type: '',
       breed: '',
       age: '',
       sex: '',
       country: 'United States',
       zipcode: '',
       img_url: ''
    }

    formHandler = (e) => {
       this.setState({
           [e.target.name]: e.target.value
       })
    }

    submitHandler = (e) => {
        const{ name, pet_type, breed, age, sex, country, zipcode, img_url } = this.state
        e.preventDefault();
        fetch('http://localhost:3001/api/v1/pets', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({
              name,
              pet_type,
              breed,
              age, 
              sex,
              country,
              zipcode,
              img_url
            })
        })
        .then(res => res.json())
        .then(pet => {
            console.log(pet)
        })

    }

    render(){
        console.log(this.state)
        return(
            <div>
                <h3 className="create-header">Create an Adoption Listing</h3>
                <form onSubmit={this.submitHandler} className="create-form">
                    <input onChange={this.formHandler} name="name" value={this.state.name} type="text" placeholder="name"/><br></br>
                    <input onChange={this.formHandler} name="pet_type"value={this.state.pet_type} type="text" placeholder="pet type"/><br></br>
                    <input onChange={this.formHandler} name="breed" value={this.state.breed}type="text" placeholder="breed"/><br></br>
                    <input onChange={this.formHandler} name="age" value={this.state.age}type="number" placeholder="age"/><br></br>
                    <input onChange={this.formHandler} name="sex" value={this.state.sex}type="text" placeholder="sex"/><br></br>
                    <input onChange={this.formHandler} name="country" value={this.state.country} type="text" placeholder="country"/><br></br>
                    <input onChange={this.formHandler} name="zipcode" value={this.state.zipcode}type="text" placeholder="zipcode"/><br></br>
                    <input onChange={this.formHandler} name="img_url" value={this.state.img_url}type="text" placeholder="img url"/><br></br>
                    <button type='submit' class='btn btn-primary'>Submit</button>
                </form>
            </div>
        )
    }
}

export default CreatePet