import Navbar from '../components/navbar';
import slider1 from "../image/slider/home-slider-1.jpg"
import slider2 from "../image/slider/home-slider-2.jpg"
import slider3 from "../image/slider/home-slider-3.jpg"
import Carousel from '../components/carousel';




const images = [
  { url: slider1, description: 'Because they need your help' },
  { url: slider2, description: 'Together we can improve their lives' },
  { url: slider3, description: 'A penny is a lot of money, if you have not got a penny.' }

];

const Home = () => {
  return (
    <div >
     <Navbar/>
     <div className="">
          <Carousel images={images} />
        </div>
     </div>
  );
};

export default Home;
