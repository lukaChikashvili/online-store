import React from 'react'

const Map = () => {
  return (
    <div className='w-full h-screen'>
        <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className="text-3xl font-bold text-blue">ჩვენი მისამართი</h1>
        <span className="w-1/2 h-[0.5px] bg-blue"></span>

        <div className='w-full h-[60vh] mt-24 flex items-center justify-center'>
        <iframe width="100%" height="120%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2941.8350749425254!2d41.8544899759385!3d42.49505877118068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405c24e08e9b4fdf%3A0x9db61079c75e7d63!2z4YOb4YOq4YOu4YOU4YOX4YOY4YOhIOGDpeGDo-GDqeGDkCwg4YOW4YOj4YOS4YOT4YOY4YOT4YOY!5e0!3m2!1ska!2sge!4v1734609775212!5m2!1ska!2sge" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</div>
    </div>
  )
}

export default Map
