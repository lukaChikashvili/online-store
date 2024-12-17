import React, { useEffect } from 'react'
import { useDeleteUserMutation, useGetUsersQuery } from '../../redux/api/userSlice'
import { Trash2 } from 'lucide-react';
import Loader from '../../components/Loader';

const UserList = () => {
   
    const { data: users, refetch, isLoading } = useGetUsersQuery();
    
    const [deleteUser] = useDeleteUserMutation();

    if(isLoading) {
      return <Loader />
  }


    useEffect(() => {
        refetch();
       
    }, [refetch]);

    const deleteHandler  = async (id) => {
        if(window.confirm('დარწმუნებული ხარ?')) {
            try {
               await deleteUser(id);
            } catch (error) {
                console.log(error.data.message)
            }
        }
    }


  return (
    <div className='mt-[4rem]'>
      <h1 className='text-center text-2xl font-bold mb-4'>ჩვენი მომხმარებლები ({users?.length})</h1>
        <table className='w-full md:w-4/5 mx-auto '>
         <thead className='bg-blue'>
            <tr>
                <th className='px-4 py-2 text-left' >ID</th>
                <th className='px-4 py-2 text-left' >სახელი</th>
                <th className='px-4 py-2 text-left' >ელ-ფოსტა</th>
                <th className='px-4 py-2 text-left' >ადმინი</th>
                <th className='px-4 py-2 text-left' ></th>
            </tr>
         </thead>

         <tbody className='bg-slate-300'>
            {users?.map((user) => (
               <tr key = {user._id}>
                  <td className='px-4 py-2'>
                    {user._id}
                  </td>

                  <td className='px-4 py-2'>
                    {user.username}
                  </td>

                  <td className='px-4 py-2'>
                    {user.email}
                  </td>

                  <td className='px-4 py-2'>
                    {user.isAdmin ? "ადმინი" : "არ არის ადმინი"}
                  </td>

                  <td className='px-4 py-2'>
                     {!user.isAdmin && (
                        <div className='flex'>
                          <button onClick={() => deleteHandler(user._id)}>
                             <Trash2 className='text-red-600'/>
                          </button>
                        </div>
                     )}
                  </td>
               </tr>
            ))}
         </tbody>
        </table>
    </div>
  )
}

export default UserList
