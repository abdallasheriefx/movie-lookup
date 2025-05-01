import bannerImg from '../assets/banner.png';

const Hero = () => {
  return (
    <header className='pt-20'>
      <img
        className='mx-auto w-full max-w-lg drop-shadow-xl/50 drop-shadow-amber-300'
        src={bannerImg}
        alt='Hero Banner'
      />
      <h1 className='my-10 w-full text-center text-4xl font-black text-white lg:text-5xl xl:text-6xl'>
        Find <span className='text-gradient'>Movies</span> You'll Love Without
        the Hassle
      </h1>
    </header>
  );
};

export default Hero;
