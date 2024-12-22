import banner from '../assets/banner.jpg'
import { BicepsFlexed, Dumbbell, Users, Weight } from 'lucide-react';
import About from './About';
import Services from './Services';
import Trainers from './Trainers';
import Price from './Price';
import LatestBlog from './LatestBlog';
import Testimonials from './Testimonials';
import Contacts from './Contacts';
import Map from './Map';
import Footer from './Footer';
import { motion } from 'framer-motion'

const Home = () => {

    const benefits = [
        {id: 1, icon: <Dumbbell />, title: "კუნთის გაზრდა"},
        {id: 2, icon: <Weight />, title: "წონაში დაკლება"},
        {id: 3, icon: <Users />, title: "ჯგუფური ვარჯიშები"},
        {id: 4, icon: <BicepsFlexed />, title: "პერსონალური ტრენერი"},
    ];



  return (
    <div className='h-screen'>
      <div className='hidden md:block '>

      
        <motion.img   initial = {{ opacity: 0}}
                   whileInView={{opacity: 1}} 
                   transition={{duration: 1, delay: 0.7}} className='absolute w-full h-[60rem] md:h-[30rem]  -top-[10rem] md:top-8 left-0 -z-10 object-contain rounded-md' src = {banner} />
        </div>

        <div>
          <img src = {banner} className=' sm:hidden absolute top-[5rem] h-[25rem] object-fill'/>
        </div>
      
      <div className=' bottom-12 flex flex-wrap items-center gap-12 justify-center mt-[30rem] '>
           {benefits.map((value, i) => (
            <motion.div initial = {{ opacity: 0, translateY: 15}}
            whileInView={{opacity: 1, translateY: 0 }} 
            transition={{duration: 0.7, delay: i * 0.25 }} key={value.id} className='cursor-pointer flex flex-col items-center gap-4 justify-center text-slate-700 font-semibold bg-blue w-[15rem] h-[8rem] rounded-lg shadow-lg shadow-gray-500'>
                <span >{value.icon}</span>
                <h2>{value.title}</h2>

                </motion.div>
            
                
           ))}
      </div>

     <About />
     <Services />
     <Trainers />
     <Price />
     <LatestBlog />
     <Testimonials />
     <Contacts />
     <Map />
     <Footer />
    </div>
  );
};

export default Home;
