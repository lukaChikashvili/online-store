import man from '../assets/workout.jpg'

const About = () => {
  return (
    <div className='w-full min-h-screen mt-[10rem] px-[4rem] '>
       <div className='flex flex-col items-center gap-4'>
         <h1 className='text-3xl font-bold text-blue'>ჩვენს შესახებ</h1>
         <span className='w-1/2 h-[0.5px] bg-blue'></span>

         <div className='flex flex-col md:flex-row items-center gap-[4rem] justify-center mt-12  '>
             <div className='flex flex-col   gap-8 '>
            <p className='text-lg md:text-xl w-[23rem] md:w-[40rem] leading-[2rem] px-4 '>
            ბაია არის თანამედროვე და ინოვაციური სავარჯიშო ცენტრი, რომელიც გთავაზობთ სრულყოფილ გარემოს
             თქვენი ფიზიკური და მენტალური ჯანმრთელობის გასაუმჯობესებლად. ჩვენი მიზანია შევთავაზოთ პროფესიონალური ტრენინგი, რომელიც მორგებულია თითოეული ადამიანის საჭიროებებს. ბაიაში ყველა დეტალი გათვალისწინებულია
             იმისთვის, რომ თქვენ იგრძნოთ თავი კომფორტულად და მოტივირებულად.
            </p>

            <p className='text-lg md:text-xl w-[23rem] md:w-[40rem] leading-[2rem] px-4  '>
            ჩვენი გუნდი შედგება მაღალკვალიფიციური და გამოცდილი პირადი ტრენერებისგან, 
            რომლებიც მზად არიან დაგეხმაროთ ნებისმიერი მიზნის მიღწევაში - იქნება ეს წონის დაკლება, ძალის განვითარება, 
            მოქნილობის გაზრდა ან უბრალოდ ჯანსაღი ცხოვრების წესის მიღება.
            </p>
     <div className='flex flex-col m-auto md:flex-row gap-8 '>
            <button onClick={() => navigate('/login')} className="w-[15rem]  relative group overflow-hidden px-8 py-1 bg-blue text-white rounded-md">
            <span className="absolute inset-0 bg-[#F29F58] transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 clip-path-curved"></span>
            <span className="relative z-10 text-md">გაიგე მეტი</span>
          </button>

          <button onClick={() => navigate('/login')} className="w-[15rem] relative group overflow-hidden px-8 py-1 bg-blue text-white rounded-md">
            <span className="absolute inset-0 bg-[#F29F58] transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 clip-path-curved"></span>
            <span className="relative z-10 text-md">კონტაქტი</span>
          </button>
          </div>

            </div>
            <img src = {man} className='hidden md:block w-[25rem] rounded-full shadow-lg cursor-pointer duration-500 ease hover:grayscale'/>
         </div>
       </div>
    </div>
  )
}

export default About
