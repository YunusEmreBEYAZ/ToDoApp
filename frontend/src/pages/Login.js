import React, { useState } from 'react'
import useLogin from '../hooks/useLogin'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { login, isLoading, error } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
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
                <button className='btn-login' disabled={isLoading}>Login</button>
            </div>
            {error && <div>{error}</div>}
        </form>
    )
}

export default Login