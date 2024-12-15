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
             localStorage.setItem('jwt', res.token);
             dispatch(setCredentials({...res}))
        } catch (error) {
            console.log(error);
        }
    }


  return (
    <div>
      <section className='pl-[10rem] flex flex-col flex-wrap items-center'>
         <div className='mr-[4rem] mt-[5rem]'>
             <h1 className='text-5xl font-semibold mb-4'> სისტემაში შესვლა</h1>
            </div>

            <form onSubmit={submitHandler} className='container w-[40rem]'>
              <div className='my-[2rem] flex flex-col gap-4'>
                 <label htmlFor='email' className='block text-sm font-medium'>ელ-ფოსტა</label>

                 <input type='email'
                        value={email}
                        className='bg-gray-200 w-full mt-1 p-2 rounded outline-none shadow-lg'
                        onChange={(e) => setEmail(e.target.value)}         
                               />
                 <label htmlFor='password' className='block text-sm font-medium'>პაროლი</label>
                 <input type='password'
                        value={password}
                        className='bg-gray-200 w-full mt-1 p-2 rounded outline-none shadow-lg'
                        onChange={(e) => setPassword(e.target.value)}         
                               />
              </div>
              <button disabled = {isLoading} type='submit' className='bg-blue text-white w-full px-4 py-2 
              rounded shadow-gray-400 shadow-md duration-500 ease hover:bg-orange-300'>{isLoading ? "გთხოვთ დაელოდოთ.." : "შესვლა"}</button>
            </form>

            <div className='mt-4'>
                <p >
                   ახალი წევრი ? {" "} <Link to ={redirect ? `/register?redirect=${redirect}` : '/register'} className='text-orange-600 underline'
                   
                   >რეგისტრაცია</Link>
                </p>
            </div>
      </section>
    </div>
  )
}

export default Login
