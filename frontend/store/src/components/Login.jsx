import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { useLoginMutation } from '../redux/api/userSlice';
import { Link } from 'react-router-dom';
import { setCredentials } from '../redux/features/auth/authSlice';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [eye, setEye] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);

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

  const handleLogin = async () => {
    if (!validateForm()) return;

    try {
      const res = await login({ email, password }).unwrap();
      if (res.token) {
        dispatch(setCredentials({ ...res }));
        localStorage.setItem('jwt', res.token);
        navigate(redirect);
      } else {
        setErrorMessage('Authentication failed. Please try again.');
      }
    } catch (error) {
      setErrorMessage(
        error?.data?.message || 'პაროლი ან ელ-ფოსტა არასწორია.'
      );
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(); 
  };

  return (
    <div>
      <section className="flex flex-col flex-wrap items-center">
        <div className="mr-[4rem] mt-[5rem]">
          <h1 className="text-5xl font-semibold mb-4">სისტემაში შესვლა</h1>
        </div>

        <form onSubmit={submitHandler} className="container w-[40rem]">
          {errorMessage && (
            <div className="bg-red-100 text-red-600 p-2 rounded mb-4">
              {errorMessage}
            </div>
          )}
          <div className="my-[2rem] flex flex-col gap-4">
            <label htmlFor="email" className="block text-sm font-medium">
              ელ-ფოსტა
            </label>

            <input
              type="email"
              value={email}
              className={`bg-gray-200 w-full mt-1 p-2 rounded outline-none shadow-lg ${
                emailError ? 'border-animated' : ''
              }`}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <span className="text-red-500">ელ-ფოსტა აუცილებელია</span>}

            <label htmlFor="password" className="block text-sm font-medium">
              პაროლი
            </label>
            <div className="relative">
              <input
                type={eye ? 'text' : 'password'}
                value={password}
                className={`bg-gray-200 w-full mt-1 p-2 rounded outline-none shadow-lg ${
                  passwordError ? 'border-animated' : ''
                }`}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setEye(!eye)}
              >
                {eye ? <EyeOff /> : <Eye />}
              </span>
            </div>
            {passwordError && <span className="text-red-500">პაროლი აუცილებელია</span>}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue text-white w-full px-4 py-2 rounded shadow-gray-400 shadow-md duration-500 ease hover:bg-orange-300"
          >
            {isLoading ? 'გთხოვთ დაელოდოთ..' : 'შესვლა'}
          </button>
        </form>

        <div className="mt-4">
          <p>
            ახალი წევრი ?{' '}
            <Link
              to={redirect ? `/register?redirect=${redirect}` : '/register'}
              className="text-orange-600 underline"
            >
              რეგისტრაცია
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;
