import { useState, useRef, useEffect } from 'react';
import Image from "next/image"

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleSwipe = (event) => {
    const swipeThreshold = 30;
    const deltaX = event.deltaX;

    if (deltaX > swipeThreshold) {
      prevSlide();
    } else if (deltaX < -swipeThreshold) {
      nextSlide();
    }
  };

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [currentIndex]);

  return (
    <section id="setup-id" className="scroll-my-[130px] md:scroll-my-[200px]">
      <div>
        <div className="relative text-xs lg:text-sm border-t shadow-2xl bg-white rounded-lg text-center">
          <div
            className="overflow-hidden"
            ref={carouselRef}
            onTouchStart={(e) => {
              const touchObject = e.changedTouches[0];
              const startX = touchObject.clientX;
              const startY = touchObject.clientY;

              const handleTouchMove = (event) => {
                const touchObject = event.changedTouches[0];
                const deltaX = touchObject.clientX - startX;
                const deltaY = touchObject.clientY - startY;

                if (Math.abs(deltaY) < Math.abs(deltaX)) {
                  handleSwipe({ deltaX });
                }

                carouselRef.current.removeEventListener('touchmove', handleTouchMove);
              };

              carouselRef.current.addEventListener('touchmove', handleTouchMove);
            }}
          >
            <div
              className="carousel-container"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="carousel-slide relative">
                  <Image
                    key={index}
                    src={image.url}
                    alt={`Slide ${index}`}
                    className="carousel-slide"
                    width={1660}
                    height={650}                
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div> 
                    <p className="text-white text-[40px] font-bold leading-[60px] w-[700px]  uppercase">{image.description}</p>
                    </div>
                    <div>
                    <button className='bg-white text-[#1d0a5b] font-bold p-3 mt-10 '> DONATE NOW</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-10 left-0 right-0 flex justify-center">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full mx-1 ${
                  index === currentIndex ? 'bg-white' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <button
            className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white text-[90px]"
            onClick={prevSlide}
          >
            &#8249;
          </button>
          <button
            className="absolute top-1/2 right-10 transform -translate-y-1/2 text-white text-[90px]"
            onClick={nextSlide}
          >
            &#8250;
          </button>
          
        </div>
    
      </div>
    </section>
  );
};

export default Carousel;
