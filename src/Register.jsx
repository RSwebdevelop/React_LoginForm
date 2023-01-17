
import React, {useState} from "react"
export const Register =(props) =>{
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(email)
    }

    return(
        <div className="auth-form-container">
            <h2>SignUp</h2>
            <form className="Register-form" onSubmit={handleSubmit}>
                <label htmlFor="name"> Full name</label>
                <input value = {name} onChange={(e)=>setName(e.target.value)}  placeholder='full Name' id="name" name="name" />
                <label for="email">email</label>
                <input value = {email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='xyz@email.com' id="email" name="email" />
                <label for="password">password</label>
                <input value = {password} onChange={(e)=>setPass(e.target.value)} type="password" placeholder='*******' id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() =>props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}

