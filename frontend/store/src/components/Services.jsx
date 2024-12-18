import { ChevronRight } from 'lucide-react'
import React from 'react'

const Services = () => {

   const services = [
    {id: 1,
     img: "https://images.unsplash.com/photo-1581122584612-713f89daa8eb?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     title: "ფიტნესი"
     },

     {id: 2,
        img: "https://media.istockphoto.com/id/1154945979/photo/kids-playing-underwater-in-pool.webp?a=1&b=1&s=612x612&w=0&k=20&c=2NszzVd82J8kOYCf6EdtMLSewjYS_UB4yPvhLNP1yYk=",
        title: "აუზი"
        },

        {id: 3,
            img: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFzc2FnZXxlbnwwfHwwfHx8MA%3D%3D",
            title: "მასაჟი"
            },

            {id: 4,
                img: "https://media.istockphoto.com/id/2148699487/photo/close-up-on-legs-of-professional-football-player-dribbling-with-a-ball-during-international.webp?a=1&b=1&s=612x612&w=0&k=20&c=6-CWYiHa9emybP-Wu47Vt7wWizkr_D9Km5lcocnmXl4=",
                title: "ფეხბურთი"
                },

              
   ]

  return (
    <div className='w-full min-h-screen'>
        <div className='flex flex-col items-center gap-4 mt-[7rem]'>
        <h1 className='text-3xl font-bold text-blue'>რას გთავაზობთ</h1>
         <span className='w-1/2 h-[0.5px] bg-blue'></span>


         <div className='mt-4 bg-blue w-full md:w-[80%] grid grid-cols-1 md:grid-cols-2 place-items-center gap-8 p-12 rounded-md shadow-lg'>
         {services.map((value) => (
            <div className="relative w-[30rem] h-[15rem] rounded-md shadow-lg cursor-pointer overflow-hidden">
              <img
                src={value.img}
                className="w-full h-full object-cover "
                alt={value.title}
              />
              
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center gap-4 text-center">
                <h2 className="text-2xl text-white font-bold">{value.title}</h2>
                <button  className="relative group overflow-hidden px-8 py-1 bg-blue text-white rounded-md">
            <span className="absolute inset-0 bg-[#F29F58] transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 clip-path-curved"></span>
            <span className="relative z-10 text-md flex items-center ">იხილეთ<ChevronRight size={20} /></span>
          </button>
              </div>
            </div>
          ))}
         </div>
        </div>
    </div>
  )
}

export default Services
