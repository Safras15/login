import React, { useState } from 'react';

function LoginForm({Login, error}){
    const [details, setDetails] = useState({name:"", email:"", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {(error != "") ? (<div className="error">{error}</div>) : ""}
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" pattern="[a-zA-Z][a-zA-Z ]{2,}" title="--Numbers Not Allowed--" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>

            <input type="submit" value="LOGIN"/>
            </div>
        </form>
    )
}

export default LoginForm;