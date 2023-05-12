import React from 'react'
import { useState } from 'react'
import {auth} from 'firebase'

import './LoginPage.scss'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        //Implement login logic
        try {
          //authenticate user with firebase auth
          signInWithEmailandPassword(auth, email, password)
          console.log('Successful login!')
          // Redirect to the dashboard or desired page after successful login

        } catch (error) {
          console.log('Error logging in:', error)
        }
    }
    
  return (
    <div className='login-page'>
        <h1 className='login-title'>Login Page</h1>
        <form className='login-form'>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="button" onClick={handleLogin}>Login</button>
        </form>
    </div>
  )
}

export default LoginPage