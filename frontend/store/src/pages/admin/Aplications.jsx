import React from 'react'
import { useAllAplicationsQuery, useDeleteApplicationMutation } from '../../redux/api/applyApiSlice'
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader';
import { Trash2 } from 'lucide-react';


const Aplications = () => {
     
    const { data: applies, isLoading }  = useAllAplicationsQuery();
    
 const { userInfo } = useSelector(state => state.auth);

 const [deleteApplication] = useDeleteApplicationMutation();


 if(isLoading) {
  return <Loader />
}

const handleDelete = async(id) => {
  if(window.confirm('დარწმუნებული ხარ?')) {
    try {
       await deleteApplication(id);
    } catch (error) {
        console.log(error.data.message)
    }
}

}



  return (
    <div className='w-full flex items-center justify-center px-[10rem] mt-16 '>
       <div>
        <h1 className='text-3xl font-bold text-blue'>ყველა აბონიმენტი ({applies?.data.length})</h1>

{userInfo && userInfo.isAdmin && (
  <div className='flex gap-8 w-full mt-4 '>
  <table className='w-full md:w-full  '>
         <thead className='bg-blue '>
            <tr>
                <th className='px-4 py-2 text-left' >ID</th>
                <th className='px-4 py-2 text-left' >სახელი</th>
                <th className='px-4 py-2 text-left' >გვარი</th>
                <th className='px-4 py-2 text-left' >ელ-ფოსტა</th>
                <th className='px-4 py-2 text-left' >ტელ.ნომერი</th>
                <th className='px-4 py-2 text-left' >აბონიმენტის ტიპი</th>
                <th className='px-4 py-2 text-left' >ვიზიტის რაოდენობა</th>
                <th className='px-4 py-2 text-left' ></th>
            </tr>
         </thead>

         <tbody className='bg-slate-300 '>
            {applies?.data.map((value) => (
               <tr key = {value._id} >
                  <td className='px-4 py-2'>
                    {value._id}
                  </td>

                  <td className='px-4 py-2'>
                    {value.name}
                  </td>

                  <td className='px-4 py-2'>
                    {value.surname}
                  </td>

                  <td className='px-4 py-2'>
                    {value.email}
                  </td>

                  <td className='px-4 py-2'>
                    {value.phone}
                  </td>

                  <td className='px-4 py-2'>
                    {value.category}
                  </td>

                  <td className='px-4 py-2'>
                    {value.visit}
                  </td>

                  <td className='px-4 py-2'>
                    {userInfo?.isAdmin && <div>
                     <button onClick={() => handleDelete(value._id)}><Trash2 className='text-red-600'/></button> 
                      </div>}
                  </td>


                

                  
                 
               </tr>
            ))}
         </tbody>
        </table>
</div>
)}
      
       </div>
    </div>
  )
}

export default Aplications
