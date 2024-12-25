import React from 'react';
import { motion } from 'framer-motion'
import ilia from '../assets/ilia.jpg'
import leqso from '../assets/leqso.jpg'

const Trainers = () => {
  const trainers = [
    {
      id: 1,
      img: leqso,
      name: "ლექსო ტუფურია",
    },
    {
      id: 2,
      img: ilia,
      name: "ილია ჩუხუა",
    },
    {
      id: 3,
      img: "https://thumbs.dreamstime.com/b/african-american-fitness-trainer-14694263.jpg",
      name: "ზანგი კაცი",
    },
  ];

  return (
    <div className="w-full min-h-screen mt-[10rem]">
      <div className="flex flex-col items-center justify-center gap-4">
        <motion.h1 initial = {{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
                       whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                        transition={{duration: 0.6, delay: 0.3}}  className="text-3xl font-bold text-blue">ჩვენი ტრენერები</motion.h1>
        <motion.span initial = {{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)'}}
                     whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 1, delay: 0.5 }} className="w-1/2 h-[0.5px] bg-blue"></motion.span>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {trainers.map((value, i) => (
            <motion.div initial = {{ opacity: 0, translateY: 15}}
            whileInView={{opacity: 1, translateY: 0 }} 
            transition={{duration: 0.7, delay: i * 0.25 }} key={value.id} className="flex flex-col gap-4 items-center mt-12">
              <div className="group relative overflow-hidden rounded-md shadow-lg cursor-pointer">
                <img
                  src={value.img}
                  className="w-[22rem] h-[27rem] object-cover rounded-md transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                  alt={value.name}
                />
              </div>
              <h2 className="text-blue font-bold text-2xl">{value.name}</h2>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainers;
