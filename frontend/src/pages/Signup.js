
import React, { useState } from 'react'
import useSignup from '../hooks/useSignup'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signup, isLoading, error } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)
    }

    return (
        <form className='signup' onSubmit={handleSubmit}>
            <div>
                <h2>Sign Up</h2>
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

                <button className='btn-login' disabled={isLoading}>Sign Up</button>
            </div>
            {error && <div>{error}</div>}
        </form>
    )
}

export default Signup