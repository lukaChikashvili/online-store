import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { useRegisterMutation } from '../redux/api/userSlice';
import { setCredentials } from '../redux/features/auth/authSlice';
import { Eye, EyeOff } from 'lucide-react';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const [eye, setEye] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [register, { isLoading }] = useRegisterMutation();
    const { userInfo } = useSelector(state => state.auth);

    const { search } = useLocation();
    const sp = new URLSearchParams(search);
    const redirect = sp.get('redirect') || '/';

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [navigate, redirect, userInfo]);

    
  const validateForm = () => {
    let valid = true;

    if (!email) {
      setEmailError(true);
      valid = false;
    } else {
      setEmailError(false);
    }

    if (!password) {
      setPasswordError(true);
      valid = false;
    } else {
      setPasswordError(false);
    }

    return valid;
  };


    const handleRegister = async (e) => {
        e.preventDefault();

            if (!validateForm()) return;
    

        

        try {
            const res = await register({ username, email, password }).unwrap();
            dispatch(setCredentials({ ...res }));
            navigate(redirect);
        } catch (error) {
          setErrorMessage(
            error?.data?.message || 'პაროლი ან ელ-ფოსტა არასწორია.'
          );
        }
    };

    return (
        <div>
            <section className='flex flex-col flex-wrap items-center'>
                <div className='mr-[4rem] mt-[5rem]'>
                    <h1 className='text-5xl font-semibold mb-4'>რეგისტრაცია</h1>
                </div>

                <form onSubmit={handleRegister} className='container w-[40rem]'>
                {errorMessage && (
            <div className="bg-red-100 text-red-600 p-2 rounded mb-4">
              {errorMessage}
            </div>
          )}
                    <div className='my-[2rem] flex flex-col gap-4'>

                        <label htmlFor='username' className='block text-sm font-medium'>სახელი</label>
                        <input
                            type='text'
                            value={username}
                            className={`bg-gray-200 w-full mt-1 p-2 rounded outline-none shadow-lg ${
                              emailError ? 'border-animated' : ''
                            }`}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <label htmlFor='email' className='block text-sm font-medium'>ელ-ფოსტა</label>
                        <input
                            type='email'
                            value={email}
                            className={`bg-gray-200 w-full mt-1 p-2 rounded outline-none shadow-lg ${
                              emailError ? 'border-animated' : ''
                            }`}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label htmlFor='password' className='block text-sm font-medium'>პაროლი</label>
                        <div className="relative">
                            <input
                                type={eye ? 'text' : 'password'}
                                value={password}
                                className={`bg-gray-200 w-full mt-1 p-2 rounded outline-none shadow-lg ${
                                  emailError ? 'border-animated' : ''
                                }`}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span
                                className='absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer'
                                onClick={() => setEye(!eye)}
                            >
                                {eye ? <EyeOff /> : <Eye />}
                            </span>
                        </div>

                        <label htmlFor='password' className='block text-sm font-medium'>დაადასტურეთ პაროლი</label>
                        <input
                            type='password'
                            value={confirmPassword}
                            className={`bg-gray-200 w-full mt-1 p-2 rounded outline-none shadow-lg ${
                              emailError ? 'border-animated' : ''
                            }`}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    

                    <button
                        disabled={isLoading}
                        type='submit'
                        className='bg-blue mt-8 text-white w-full px-4 py-2 rounded shadow-gray-400 shadow-md duration-500 ease hover:bg-orange-300'
                    >
                        {isLoading ? "მიმდინარეობს რეგისტრაცია.." : "რეგისტრაცია"}
                    </button>
                </form>
            </section>
        </div>
    );
}

export default Register;
