import React from 'react'

const LostForm = (props) => {
    const {petType, imgUrl, location, formHandler, submitHandler} = props
    return(
    <form onSubmit={submitHandler} className="create-form">
        <input onChange={formHandler} name="pet_type" value={petType} type="text" placeholder="pet type"/><br></br>
        <input onChange={formHandler} name="location" value={location} type="text" placeholder="location"/><br></br>
        <input onChange={formHandler} name="img_url" value={imgUrl} type="text" placeholder="img url"/><br></br>
        <button type='submit' class='btn btn-primary'>Submit</button>
    </form>
    )
}

export default LostForm