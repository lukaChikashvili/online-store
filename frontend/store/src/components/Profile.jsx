import React, { useEffect, useState } from 'react'
import { useProfileMutation } from '../redux/api/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../redux/features/auth/authSlice';
import { useAllAplicationsQuery } from '../redux/api/applyApiSlice';

const Profile = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [profile, {isLoading}] = useProfileMutation();



    const { userInfo } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    useEffect(() => {
         setUsername(userInfo.username);
         setEmail(userInfo.email)
    }, [userInfo.email, userInfo.username]);
      
    const updateProfile = async(e) => {
        e.preventDefault();
        
        try {
            const res = await profile({_id: userInfo._id, username, email}).unwrap();
            dispatch(setCredentials({...res}));
 
        } catch (error) {
            console.log(error);
        }
        


    }

  return (
    <div>
      
      <section className='pl-[10rem] flex flex-col flex-wrap'>
         <div className='mr-[4rem] mt-[5rem]'>
             <h1 className='text-5xl font-semibold mb-4 text-blue '>ჩემი პროფილი</h1>
            </div>

            <form onClick={updateProfile}   className='container w-[40rem]'>
              <div className='my-[2rem] flex flex-col gap-4'>

              <label htmlFor='username' className='block text-sm font-medium'>სახელი</label>

              <input type='text'
                    value={username}
                    className='bg-gray-200 w-full mt-1 p-2 rounded outline-none shadow-lg'
                     onChange={(e) => setUsername(e.target.value)}         
              />



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

            

              
              <button disabled = {isLoading} type='submit' className='bg-blue mt-8 text-white w-full px-4 py-2 
              rounded shadow-gray-400 shadow-md duration-500 ease hover:bg-orange-300'>{isLoading ? "რედაქტირება.." : "რედაქტირება"}</button>
            </form>


          
      </section>
    </div>
  )
}

export default Profile
