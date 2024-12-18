import { ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

const Price = () => {
   
    const [active, setActive] = useState(false);

  const plans = [
    {
      id: 1,
      title: "12 ვიზიტი",
      price: "70 ლარი",
      description: "შესანიშნავი არჩევანი.",
      description2: "9:00 - 14:00 -მდე 50 ლარი"
    },
    {
      id: 2,
      title: "15 ვიზიტი",
      price: "90 ლარი",
      description: "შეარჩიეთ მეტი თავისუფლებისთვის.",
      description2: "9:00 - 14:00 -მდე 70 ლარი"
    },
    {
      id: 3,
      title: "ულიმიტო",
      price: "130 ლარი",
      description: "იდეალური ვარიანტი.",
      description2: "ჯამრთელი ცხოვრებისთვის"
     
    },
  ];

  const pool = [
    {
      id: 1,
      title: "8 ვიზიტი",
      price: "120 ლარი",
      description: "შესანიშნავი არჩევანი.",
      description2: "9:00 - 14:00 -მდე 50 ლარი"
    },
    {
      id: 2,
      title: "12 ვიზიტი",
      price: "150 ლარი",
      description: "შეარჩიეთ მეტი თავისუფლებისთვის.",
      description2: "9:00 - 14:00 -მდე 70 ლარი"
    },
  
  ];

  return (
    <div className="w-full min-h-screen mt-[5rem]">
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-3xl font-bold text-blue">რა ღირს აბონიმენტი?</h1>
        <span className="w-1/2 h-[0.5px] bg-blue"></span>

        <div className='flex items-center gap-4 ml-[43rem] '>
            <button onClick={() => setActive(false)} className={`w-[10rem]  py-1 rounded-md shadow-lg ${active ? "bg-transparent border-2 border-slate-400 text-slate-700" : "bg-slate-400 text-white"} duration-500 ease hover:opacity-80`}>ფიტნესი</button>
            <button onClick={() => setActive(true)} className={`w-[10rem] ${active ? "bg-slate-400 text-white" : "text-slate-700 border-2 border-slate-400 bg-transparent" }  py-1 rounded-md shadow-lg  duration-500 ease hover:opacity-80`}>აუზი</button>
          
        </div>

        {active ? (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-8">
                    {pool.map((pool) => (
                      <div
                        key={pool.id}
                        className="bg-white w-80 h-[20rem] p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                      >
                        <h2 className="text-xl font-bold text-blue mb-4">{pool.title}</h2>
                        <p className="text-2xl font-semibold text-gray-700 mb-4">
                          {pool.price}
                        </p>
                        <p className="text-gray-600 mb-6">{pool.description}</p>
                        <p className="text-gray-600 mb-6">{pool.description2}</p>
                        <button  className="relative group overflow-hidden px-8 py-1 bg-blue text-white rounded-md">
                      <span className="absolute inset-0 bg-[#F29F58] transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 clip-path-curved"></span>
                      <span className="relative z-10 text-md flex items-center ">იხილეთ სრულად<ChevronRight size={20} /></span>
                    </button>
                      </div>
                    ))}
                  </div>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="bg-white w-80 h-[20rem] p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <h2 className="text-xl font-bold text-blue mb-4">{plan.title}</h2>
                <p className="text-2xl font-semibold text-gray-700 mb-4">
                  {plan.price}
                </p>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <p className="text-gray-600 mb-6">{plan.description2}</p>
                <button  className="relative group overflow-hidden px-8 py-1 bg-blue text-white rounded-md">
              <span className="absolute inset-0 bg-[#F29F58] transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 clip-path-curved"></span>
              <span className="relative z-10 text-md flex items-center ">იხილეთ სრულად<ChevronRight size={20} /></span>
            </button>
              </div>
            ))}
          </div>
        )}

       
      </div>
    </div>
  );
};

export default Price;
