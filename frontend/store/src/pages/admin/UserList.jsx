import React, { useEffect } from 'react'
import { useDeleteUserMutation, useGetUsersQuery } from '../../redux/api/userSlice'

const UserList = () => {
   
    const { data: users, refetch, isLoading, error } = useGetUsersQuery();
    
    const [deleteUser] = useDeleteUserMutation();

    useEffect(() => {
        refetch();
       
    }, [refetch]);


  return (
    <div className='mt-[4rem]'>
        <table className='w-full md:w-4/5 mx-auto '>
         <thead className='bg-blue'>
            <tr>
                <th className='px-4 py-2 text-left' >ID</th>
                <th className='px-4 py-2 text-left' >სახელი</th>
                <th className='px-4 py-2 text-left' >ელ-ფოსტა</th>
                <th className='px-4 py-2 text-left' >ადმინი</th>
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
                    {user.isAdmin ? "ადმინი" : "არა არის ადმინი"}
                  </td>
               </tr>
            ))}
         </tbody>
        </table>
    </div>
  )
}

export default UserList
