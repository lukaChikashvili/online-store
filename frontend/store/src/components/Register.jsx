import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { useRegisterMutation } from '../redux/api/userSlice';
import { setCredentials } from '../redux/features/auth/authSlice';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

   
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [register, {isLoading}] = useRegisterMutation();
    const { userInfo } = useSelector(state => state.auth);

    const { search } = useLocation();
    const sp = new URLSearchParams(search);
    const redirect = sp.get('redirect') || '/';

    useEffect(() => {
        if(userInfo) {
            navigate(redirect)
        }
    }, [navigate, redirect, userInfo]);

     const handleRegister = async(e) => {
        e.preventDefault();
          
        if(password !== confirmPassword) {
            console.log('passwords do not match');
        }else {
            try {
                 const res = await register({username, email, password}).unwrap();
                 dispatch(setCredentials({...res}));
                 navigate(redirect)

            } catch (error) {
                console.log(error)
            }
        }
     }
    

  return (
    <div>
         <section className='pl-[10rem] flex flex-col flex-wrap'>
         <div className='mr-[4rem] mt-[5rem]'>
             <h1 className='text-6xl font-semibold mb-4'>Register</h1>
            </div>

            <form onSubmit={handleRegister}  className='container w-[40rem]'>
              <div className='my-[2rem] flex flex-col gap-4'>

              <label htmlFor='username' className='block text-sm font-medium'>Username</label>

              <input type='text'
                    value={username}
                    className='bg-gray-200 w-full mt-1 p-2 rounded outline-none shadow-lg'
                     onChange={(e) => setUsername(e.target.value)}         
              />



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

              <label htmlFor='password' className='block text-sm font-medium'>confirm password</label>
                 <input type='password'
                        value={confirmPassword}
                        className='bg-gray-200 w-full mt-1 p-2 rounded outline-none shadow-lg'
                        onChange={(e) => setConfirmPassword(e.target.value)}         
                               />


              
              <button disabled = {isLoading} type='submit' className='bg-orange-400 mt-8 text-white w-full px-4 py-2 
              rounded shadow-gray-400 shadow-md duration-500 ease hover:bg-orange-300'>{isLoading ? "Registering.." : "Register"}</button>
            </form>

          
      </section>
    </div>
  )
}

export default Register
