import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { login } from '../../utils/auth'
import './Admin.css'

function AdminLogin() {
  const navigate = useNavigate()
  const location = useLocation()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitting(true)
    setError('')

    const username = event.target.username.value
    const password = event.target.password.value

    try {
      await login(username, password)
      const redirectTo = location.state?.from || '/admin/all'
      navigate(redirectTo, { replace: true })
    } catch {
      setError('Invalid username or password')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className='w-full min-h-screen bg-[rgba(242,242,242,1)] flex items-center justify-center px-[16px] py-[48px]'>
      <div className='w-full max-w-[480px] bg-white rounded-[16px] p-[32px] shadow-sm'>
        <h1 className='text-[rgba(73,73,73,1)] text-[32px] font-[600] text-center mb-[8px]'>
          Admin Login
        </h1>
        <p className='text-[rgba(123,123,123,1)] text-center mb-[32px]'>
          Sign in to view form requests
        </p>

        <form onSubmit={handleSubmit}>
          <label className='block text-[rgba(73,73,73,1)] font-[600] mb-[8px]'>Username</label>
          <input
            name='username'
            required
            autoComplete='username'
            className='w-full p-[16px] border border-[rgba(123,123,123,1)] rounded-[100px] mb-[20px]'
            placeholder='Username'
          />

          <label className='block text-[rgba(73,73,73,1)] font-[600] mb-[8px]'>Password</label>
          <input
            name='password'
            type='password'
            required
            autoComplete='current-password'
            className='w-full p-[16px] border border-[rgba(123,123,123,1)] rounded-[100px] mb-[24px]'
            placeholder='Password'
          />

          {error ? <p className='text-red-600 mb-[16px]'>{error}</p> : null}

          <button
            type='submit'
            disabled={submitting}
            style={{ background: 'linear-gradient(137.19deg, #2F9E56 24.05%, #0F682E 107.51%)' }}
            className='w-full px-[46px] py-[16px] rounded-[44px] text-white font-[600] disabled:opacity-70'
          >
            {submitting ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin
