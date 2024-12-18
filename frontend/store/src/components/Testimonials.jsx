import React from "react";


const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "ლექსო ტუფურია",
      image:
        "https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/430816657_255384164282674_2009366674719839285_n.jpg?stp=cp6_dst-jpg_p526x296_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Dxhg3AmuGckQ7kNvgGKnH27&_nc_zt=23&_nc_ht=scontent.fkut1-1.fna&_nc_gid=AZp451lsr6iW6HyGOFri-_x&oh=00_AYCuDOH3Ih0KzXZA7ck--d0K4W7kc6AZC3Z6X6DgmXxQiQ&oe=6768A125",
      quote: "საუკეთესო მომსახურება და პროფესიონალი პერსონალი. მადლობა!",
    },
    {
      id: 2,
      name: "ილია ჩუხუა",
      image:
        "https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/430040114_256228214198269_7628995155668815644_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=iKOcERKjlsAQ7kNvgE0Z2oD&_nc_zt=23&_nc_ht=scontent.fkut1-1.fna&_nc_gid=AamGozYJodBphIamvlHym3K&oh=00_AYALQZ2Zcq3-RU3a-YkfzoOUL9K8SRllnJbhb1z266wCZg&oe=6768AE93",
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
        <h1 className="text-4xl font-bold text-slate-700">ჩვენი კმაყოფილი მომხმარებლები</h1>
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
