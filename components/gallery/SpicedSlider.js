'use client';

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import VanillaTilt from 'vanilla-tilt';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  { src: '/images/bg/infrastructure-bg1.png', heading: 'Luxury Coach Design', subtitle: 'Where comfort meets elegance.' },
  { src: '/images/bg/infrastructure-bg2.png', heading: 'Sleeper Bus Interiors', subtitle: 'Relaxation on the go.' },
  { src: '/images/bg/infrastructure-bg3.png', heading: 'Precision Fabrication', subtitle: 'Built with excellence.' },
  { src: '/images/bg/infrastructure-bg4.png', heading: 'Custom Bus Solutions', subtitle: 'Your vision, our creation.' },
];

const UltimateSlider = () => {
  const sparkleRef = useRef(null);
  const audioRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  // Loader timer
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Tilt Effect
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll('.tilt'), {
      max: 10,
      speed: 400,
      glare: true,
      'max-glare': 0.3,
    });
  }, []);

  // Allow audio playback on user interaction
  useEffect(() => {
    const unlockAudio = () => {
      audioRef.current?.play().catch(() => {});
      audioRef.current?.pause();
      window.removeEventListener('click', unlockAudio);
    };
    window.addEventListener('click', unlockAudio);
  }, []);

  // FX trigger
  const triggerFX = () => {
    const sparkle = sparkleRef.current;
    if (sparkle) {
      sparkle.classList.remove('hidden');
      sparkle.classList.add('opacity-100', 'scale-100');
      setTimeout(() => sparkle.classList.add('hidden'), 600);
    }
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => console.log('Audio error:', err));
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-black text-white text-xl">
        <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        Loading Gallery...
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <audio ref={audioRef} src="/sound.mp3" preload="auto" />

      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={1500}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={triggerFX}
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-full">
              {/* Tilt + Overlay wrapper */}
              <div className="tilt relative w-full h-full">
                <img
                  src={slide.src}
                  alt={`Slide ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                />
                {/* Overlay Text Fixed */}
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-center text-white px-4">
                  <h2 className="text-red-400 text-4xl md:text-6xl font-bold animate-fadeInDown">
                    {slide.heading}
                  </h2>
                  <p className="text-gray-200 text-xl md:text-2xl mt-4 animate-fadeInUp">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Sparkle FX */}
      <div
        ref={sparkleRef}
        className="hidden absolute top-1/2 left-1/2 w-24 h-24 bg-red-500/60 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0 transition-all duration-500 pointer-events-none"
      ></div>
    </div>
  );
};

export default UltimateSlider;
