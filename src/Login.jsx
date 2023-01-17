import React, {useState} from "react"// capture value which user insert in login by using hook useState

export const Login =(props) =>{
    const [email, setEmail] = useState(''); // name of stateis email and setEmail hook act like a function which modify state
    const [password, setPass] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('email')
    }
    return(
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="Login-form" onSubmit={handleSubmit}>
                <label for="email">Email</label>
                <input value = {email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='xyz@email.com' id="email" name="email" />
                <label for="password">Password</label>
                <input value = {password} onChange={(e)=>setPass(e.target.value)} type="password" placeholder='*******' id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() =>props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}