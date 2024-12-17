import banner from '../assets/banner.jpg'
import { BicepsFlexed, Dumbbell, Users, Weight } from 'lucide-react';
import About from './About';
import Services from './Services';

const Home = () => {

    const benefits = [
        {id: 1, icon: <Dumbbell />, title: "კუნთის გაზრდა"},
        {id: 2, icon: <Weight />, title: "წონაში დაკლება"},
        {id: 3, icon: <Users />, title: "ჯგუფური ვარჯიშები"},
        {id: 4, icon: <BicepsFlexed />, title: "პერსონალური ტრენერი"},
    ];



  return (
    <div className=''>
        <img className='  absolute w-full h-[60rem] md:h-[30rem]  -top-[10rem] md:top-8 left-0 -z-10 object-contain rounded-md' src = {banner} />

      
      <div className=' bottom-12 flex flex-wrap items-center gap-12 justify-center mt-[30rem] '>
           {benefits.map((value) => (
            <div key={value.id} className='cursor-pointer flex flex-col items-center gap-4 justify-center text-slate-700 font-semibold bg-blue w-[15rem] h-[8rem] rounded-lg shadow-lg shadow-gray-500'>
                <span >{value.icon}</span>
                <h2>{value.title}</h2>

                </div>
            
                
           ))}
      </div>

     <About />
     <Services />

    </div>
  );
};

export default Home;
