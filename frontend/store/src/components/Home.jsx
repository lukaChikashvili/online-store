import banner from '../assets/banner.jpg'

const Home = () => {


  return (
    <div>
        <img className='absolute w-full h-[30rem] top-8 left-0 -z-10 object-contain rounded-md' src = {banner} />

    </div>
  );
};

export default Home;
