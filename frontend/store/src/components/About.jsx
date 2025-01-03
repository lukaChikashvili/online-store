import man from '../assets/workout.jpg'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='w-full min-h-screen mt-[14rem] px-[4rem] '>
       <div className='flex flex-col items-center gap-4'>
         <motion.h1 initial = {{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
                       whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                        transition={{duration: 0.6, delay: 0.3}}  className='text-3xl font-bold text-blue'>ჩვენს შესახებ</motion.h1>
         <motion.span initial = {{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)'}}
                     whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 1, delay: 0.5 }} className='w-1/2 h-[0.5px] bg-blue'></motion.span>

         <div className='flex flex-col md:flex-row items-center gap-[4rem] justify-center mt-12  '>
             <div className='flex flex-col   gap-8 '>
            <motion.p initial = {{ opacity: 0, translateX: 15}}
                       whileInView={{opacity: 1, translateX: 0 }} 
                       transition={{duration: 0.5, delay: 0.5}} className='text-lg md:text-xl w-[23rem] md:w-[40rem] leading-[2rem] px-4 '>
            ბაია არის თანამედროვე და ინოვაციური სავარჯიშო ცენტრი, რომელიც გთავაზობთ სრულყოფილ გარემოს
             თქვენი ფიზიკური და მენტალური ჯანმრთელობის გასაუმჯობესებლად. ჩვენი მიზანია შევთავაზოთ პროფესიონალური ტრენინგი, რომელიც მორგებულია თითოეული ადამიანის საჭიროებებს. ბაიაში ყველა დეტალი გათვალისწინებულია
             იმისთვის, რომ თქვენ იგრძნოთ თავი კომფორტულად და მოტივირებულად.
            </motion.p>

            <motion.p initial = {{ opacity: 0, translateX: 15}}
                       whileInView={{opacity: 1, translateX: 0 }} 
                       transition={{duration: 0.5, delay: 0.7}} className='text-lg md:text-xl w-[23rem] md:w-[40rem] leading-[2rem] px-4  '>
            ჩვენი გუნდი შედგება მაღალკვალიფიციური და გამოცდილი პირადი ტრენერებისგან, 
            რომლებიც მზად არიან დაგეხმაროთ ნებისმიერი მიზნის მიღწევაში - იქნება ეს წონის დაკლება, ძალის განვითარება, 
            მოქნილობის გაზრდა ან უბრალოდ ჯანსაღი ცხოვრების წესის მიღება.
            </motion.p>
     <div className='flex flex-col m-auto md:m-2 md:flex-row gap-8 '>
            <motion.button initial = {{ opacity: 0, translateY: 15}}
                       whileInView={{opacity: 1, translateY: 0 }} 
                       transition={{duration: 0.5, delay: 0.8}} onClick={() => navigate('/login')} className="w-[15rem]  relative group overflow-hidden px-8 py-1 bg-blue text-white rounded-md">
            <span className="absolute inset-0 bg-[#F29F58] transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 clip-path-curved"></span>
            <span className="relative z-10 text-md">გაიგე მეტი</span>
          </motion.button>

          <motion.button initial = {{ opacity: 0, translateY: 15}}
                       whileInView={{opacity: 1, translateY: 0 }} 
                       transition={{duration: 0.5, delay: 0.9}} onClick={() => navigate('/login')} className="w-[15rem] relative group overflow-hidden px-8 py-1 bg-blue text-white rounded-md">
            <span className="absolute inset-0 bg-[#F29F58] transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 clip-path-curved"></span>
            <span className="relative z-10 text-md">კონტაქტი</span>
          </motion.button>
          </div>

            </div>
            <motion.img initial = {{ opacity: 0, translateX: 15}}
                       whileInView={{opacity: 1, translateX: 0 }} 
                       transition={{duration: 0.9, delay: 1}} src = {man} className='hidden md:block w-[25rem] rounded-full shadow-lg cursor-pointer duration-500 ease hover:grayscale'/>
         </div>
       </div>
    </div>
  )
}

export default About
