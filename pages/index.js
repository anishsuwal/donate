import Navbar from '../components/navbar';

import slider1 from "../image/slider/home-slider-1.jpg"
import slider2 from "../image/slider/home-slider-2.jpg"
import slider3 from "../image/slider/home-slider-3.jpg"



import bus from "../image/sponsors/bus.png"
import oneWorld from "../image/sponsors/one-world.png"
import taous from "../image/sponsors/sponsor-taous.jpg"
import unilever from "../image/sponsors/sponsor-unilever.jpg"
import nations from "../image/sponsors/united-nations.png"
import wikimedia from "../image/sponsors/wikimedia.png"
import wikiversity from "../image/sponsors/wikiversity.png"

//import ourSponsors from '../components/ourSponsors';
import Anish from '../components/anish';

import Carousel from '../components/carousel';
import OurGoal from '../components/ourGoal';
import OurCauses from '../components/ourCauses';




const images = [
  { url: slider1, description: 'Because they need your help' },
  { url: slider2, description: 'Together we can improve their lives' },
  { url: slider3, description: 'A penny is a lot of money, if you have not got a penny.' }
];

const sponsors = [
  { url: bus, description: 'Because they need your help' },
  { url: oneWorld, description: 'Together we can improve their lives' },
  { url: taous, description: 'A penny is a lot of money, if you have not got a penny.' },
  { url: unilever, description: 'A penny is a lot of money, if you have not got a penny.' },
  { url: nations, description: 'A penny is a lot of money, if you have not got a penny.' },
  { url: wikimedia, description: 'A penny is a lot of money, if you have not got a penny.' },
  { url: wikiversity, description: 'A penny is a lot of money, if you have not got a penny.' },

];

const Home = () => {
  return (
    <div >
      <Navbar />
      <div >
        <Carousel images={images} />
      </div>
      <div className=' flex justify-center m-10 ' >
        <OurGoal />
      </div>
      <div className=' flex justify-center m-10 ' >
        <OurCauses />
      </div>
      <div className=' flex justify-center m-10 ' >
        <Anish images={sponsors} />
      </div>
    </div>
  );
};

export default Home;
