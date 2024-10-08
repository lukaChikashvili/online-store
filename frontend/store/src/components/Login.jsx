import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { useLoginMutation } from '../redux/api/userSlice';
import { Link } from 'react-router-dom';
import { setCredentials } from '../redux/features/auth/authSlice';


const Login = () => {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [login, {isLoading}] = useLoginMutation();
    const { userInfo } = useSelector(state => state.auth);

    const { search } = useLocation();
    const sp = new URLSearchParams(search);
    const redirect = sp.get('redirect') || '/'


    useEffect(() => {
        if(userInfo) {
            navigate(redirect)
        }
    }, [navigate, redirect, userInfo]);

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
             const res = await login({ email, password }).unwrap();
             console.log(res);
             dispatch(setCredentials({...res}))
        } catch (error) {
            console.log(error);
        }
    }


  return (
    <div>
      <section className='pl-[10rem] flex flex-col flex-wrap'>
         <div className='mr-[4rem] mt-[5rem]'>
             <h1 className='text-6xl font-semibold mb-4'>Sign In</h1>
            </div>

            <form onSubmit={submitHandler} className='container w-[40rem]'>
              <div className='my-[2rem] flex flex-col gap-4'>
                 <label htmlFor='email' className='block text-sm font-medium'>Email adress</label>

                 <input type='email'
                        value={email}
                        className='bg-gray-200 w-full mt-1 p-2 rounded outline-none shadow-lg'
                        onChange={(e) => setEmail(e.target.value)}         
                               />
                 <label htmlFor='password' className='block text-sm font-medium'>Password</label>
                 <input type='password'
                        value={password}
                        className='bg-gray-200 w-full mt-1 p-2 rounded outline-none shadow-lg'
                        onChange={(e) => setPassword(e.target.value)}         
                               />
              </div>
              <button disabled = {isLoading} type='submit' className='bg-orange-400 text-white w-full px-4 py-2 
              rounded shadow-gray-400 shadow-md duration-500 ease hover:bg-orange-300'>{isLoading ? "Signing In.." : "Sign In"}</button>
            </form>

            <div className='mt-4'>
                <p >
                   New Customer ? {" "} <Link to ={redirect ? `/register?redirect=${redirect}` : '/register'} className='text-orange-600 underline'
                   
                   >Register</Link>
                </p>
            </div>
      </section>
    </div>
  )
}

export default Login
