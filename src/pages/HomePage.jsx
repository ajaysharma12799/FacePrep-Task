import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = ({ setCurrentUser }) => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: 'foo@gmail.com',
        password: 'bar'
    })

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.valuw,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCurrentUser(user);
        setUser({
            ...user,
            email: '',
            password: ''
        })
        navigate('/dashboard');
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='my-5 mx-auto w-[90%] md:w-1/2'>
                <div className='my-2'>
                    <input type='email' name='email' value={user.email} onChange={handleChange} placeholder='Enter Email' className='border-2 w-full py-2 px-1 rounded-md' />
                </div>
                <div className='my-2'>
                    <input type='password' name='password' value={user.password} onChange={handleChange} placeholder='Enter Password' className='border-2 w-full py-2 px-1 rounded-md' />
                </div>
                <div className='my-2'>
                    <button type='submit' className='bg-blue-500 text-white w-full py-2 text-center rounded-md'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default HomePage