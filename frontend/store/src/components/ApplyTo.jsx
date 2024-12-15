import { useState } from 'react'
//import PhoneInput from 'react-phone-number-input'
//import 'react-phone-number-input/style.css'
import { useCreateApplyMutation } from '../redux/api/applyApiSlice';
import { useSelector } from 'react-redux';
import {  useNavigate } from 'react-router';

const ApplyTo = () => {
  
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [category, setCategory] = useState('');
    const [visit, setVisit] = useState('');

    const [createApply] = useCreateApplyMutation();
    const { userInfo } = useSelector(state => state.auth);

  const  [err, setErr] = useState('');

    const navigate = useNavigate();

    
    const bookVisit = async() => {
        try {

            if(!userInfo) {
                setErr('აბონიმენტის დასაჯავშნად გთხოვთ გაიაროთ ავტორიზაცია');

            }else {
                 await createApply({name, surname, email, phone, category, visit}).unwrap();
                setErr('თქვენ წარმატებით დაჯავშნეთ აბონიმენტი');
                 navigate('/profile');
                
            }
           

            
        } catch (error) {
            console.log(error);
        }
    }


  return (
    <div className='w-full h-screen flex flex-col gap-4 items-center justify-center -mt-12 px-[10rem]'>
        <h1 className='text-3xl font-bold text-slate-500'>აბონიმენტის დაჯავშნა</h1>
        <span className='w-full h-[0.5px] bg-blue'></span>
        <div className='flex flex-col gap-2'>
            <label htmlFor='name'>სახელი</label>
           <input type = "text" value = {name} onChange={(e) => setName(e.target.value)}
           className='p-2  w-[30rem] border rounded-lg bg-slate-200 outline-none shadow-lg'/>

           <label htmlFor='surname'>გვარი</label>
           <input type = "text" value = {surname} onChange={(e) => setSurname(e.target.value)} className='p-2  w-[30rem] border rounded-lg bg-slate-200 outline-none shadow-lg'/>

           <label htmlFor='email'>ელ-ფოსტა</label>
           <input type = "email"  value = {email} onChange={(e) => setEmail(e.target.value)} className='p-2  w-[30rem] border rounded-lg bg-slate-200 outline-none shadow-lg'/>
         
             <label htmlFor='phone'>ტელეფონის ნომერი</label>
             <input type = "number"  value = {phone} onChange={(e) => setPhone(e.target.value)} className='p-2  w-[30rem] border rounded-lg bg-slate-200 outline-none shadow-lg'/>

        <label htmlFor="category">კატეგორია</label>
         <select
          id="category"
          value = {category} onChange={(e) => setCategory(e.target.value)}
          className="p-2 w-[30rem] border rounded-lg bg-slate-200 outline-none shadow-lg focus:ring-2 focus:ring-blue-400"
        >
          <option value="" disabled >
            აირჩიეთ კატეგორია
          </option>
          <option value="ფიტნესი" className='p-4 hover:bg-blue '>ფიტნესი</option>
          <option value="იოგა">იოგა</option>
          <option value="ცურვა">ცურვა</option>
         
        </select>

        <label htmlFor="visit">ვიზიტი</label>
         <select
          id="category"
          value = {visit} onChange={(e) => setVisit(e.target.value)}
          className="p-2 w-[30rem] border rounded-lg bg-slate-200 outline-none shadow-lg focus:ring-2 focus:ring-blue-400"
        >
          <option value="" disabled >
            აირჩიეთ კატეგორია
          </option>
          <option value="ულიმიტო" className='p-4 hover:bg-blue '>ულიმიტო</option>
          <option value="15">15 ვიზიტი</option>
          <option value="12">12 ვიზიტი</option>
          <option value="8">8 ვიზიტი</option>
        </select>
          
        <button onClick = {bookVisit} className=" mt-2 w-full relative group overflow-hidden px-8 py-1 bg-blue text-white rounded-md">
            <span className="absolute inset-0 bg-[#F29F58] transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 clip-path-curved"></span>
            <span className="relative z-10 text-md">დაჯავშვნა</span>
            </button>
           
        </div>

        <span className='text-red-500 font-bold'>{err}</span>
    </div>
  )
}

export default ApplyTo
