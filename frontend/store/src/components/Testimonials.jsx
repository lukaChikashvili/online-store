import React from "react";
import ilia from '../assets/ilia.jpg'
import leqso from '../assets/leqso.jpg'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "ლექსო ტუფურია",
      image: leqso,
     
      quote: "საუკეთესო მომსახურება და პროფესიონალი პერსონალი. მადლობა!",
    },
    {
      id: 2,
      name: "ილია ჩუხუა",
      image:
        ilia,
      quote: "ეს არის ადგილი, სადაც ნამდვილად გრძნობ კომფორტსა და სანდოობას.",
    },
    {
      id: 3,
      name: "ზანგი კაცი",
      image:
        "https://thumbs.dreamstime.com/b/african-american-fitness-trainer-14694263.jpg",
      quote: "მომსახურების ხარისხი შეუდარებელია. ნამდვილად საუკეთესო გამოცდილება.",
    },
  ];

  return (
    <div className="w-full min-h-screen  py-16 mt-24">
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-4xl font-bold text-slate-700 text-center">ჩვენი კმაყოფილი მომხმარებლები</h1>
        <p className="text-lg text-blue text-center w-3/4 md:w-1/2">
          იხილეთ რას ფიქრობენ ჩვენი მომხმარებლები ჩვენს მომსახურებაზე.
        </p>
        <span className="w-20 h-[3px] bg-blue-500"></span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-6 lg:px-20">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full object-cover mx-auto border-4 border-blue-500"
            />
            <h2 className="text-center text-xl font-semibold text-blue-900 mt-4">{testimonial.name}</h2>
            <p className="text-gray-600 text-center mt-2 italic">
              "{testimonial.quote}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
