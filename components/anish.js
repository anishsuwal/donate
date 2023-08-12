import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const Anish = ({ images }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [numVisibleImages, setNumVisibleImages] = useState(0);

  const carouselRef = useRef(null);

  const calculateVisibleImages = () => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.offsetWidth;
      const imageWidth = images.length > 0 ? carouselRef.current.querySelector('.carousel-slide').offsetWidth : 0;

      const newNumVisibleImages = Math.floor(containerWidth / imageWidth);
      setNumVisibleImages(newNumVisibleImages);
    }
  };

  const nextSlide = () => {
    const nextStartIndex = (startIndex + numVisibleImages) % images.length;
    setStartIndex(nextStartIndex);
  };

  const prevSlide = () => {
    const prevStartIndex = startIndex === 0 ? images.length - numVisibleImages : startIndex - numVisibleImages;
    setStartIndex(prevStartIndex);
  };

  useEffect(() => {
    calculateVisibleImages(); // Initial calculation
    window.addEventListener('resize', calculateVisibleImages); // Listen for window resize

  
  }, [startIndex]);

  return (
    <div className="justify-center items-center  text-bold px-5 xl:m-10  ">
    <p className='justify-cnter text-center text-[#1d0a5b]  text-lg font-bold underline'>OUR SPONSORS</p>
      <div className="carousel-container mt-10" ref={carouselRef}>
        <div
          className="carousel-content"
          style={{
            transform: `translateX(-${startIndex * (100 / images.length)}%)`,
            display: 'flex',
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="carousel-slide"
              style={{
                marginRight: '50px',
                flexShrink: 20,
              }}
            >
              <Image src={image.url} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Anish;