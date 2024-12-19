import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className='bg-slate-800 text-white py-8 px-12 '>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between gap-4'>
       
        <div className='text-2xl font-bold'>
          <a href='/' className='hover:text-blue-400'>
            <img src = {logo} className='w-[10rem]'/>
          </a>
        </div>

     
        <nav className='flex flex-wrap items-center justify-center gap-6'>
          <a href='/about' className='text-gray-300 hover:text-blue-400'>ჩვენს შესახებ</a>
          <a href='/services' className='text-gray-300 hover:text-blue-400'>სერვისები</a>
          <a href='/contact' className='text-gray-300 hover:text-blue-400'>კონტაქტი</a>
          <a href='/privacy' className='text-gray-300 hover:text-blue-400'>წესები და პირობები</a>
        </nav>

        <div className='flex items-center gap-4'>
          <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-blue-400'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-blue-400'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-blue-400'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-blue-400'>
            <i className='fab fa-linkedin-in'></i>
          </a>
        </div>
      </div>

     
      <div className='mt-8 text-center text-gray-500'>
        &copy; {new Date().getFullYear()} ყველა უფლება დაცულია.
      </div>
    </footer>
  );
};

export default Footer;
