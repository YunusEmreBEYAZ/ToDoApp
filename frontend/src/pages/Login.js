

import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(email, password);
    }

    return (
        <form className='login' onSubmit={handleSubmit}>
            <div>
                <h2>Login</h2>
            </div>
            <div>
                <label>Email:</label>
            </div>
            <div>
                <input
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="username"
                    value={email}
                />
            </div>
            <div>
                <label>Password:</label>
            </div>
            <div>
                <input
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    value={password}
                />
            </div>
            <div>
                <button className='btn-login'>Login</button>
            </div>
        </form>
    )
}

export default Login