import { Helmet } from "react-helmet";
import { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import BANNER from '../../../Assets/Banner/banner.png';
import P1 from '../../../Assets/Tshirts/1.png';
import P3 from '../../../Assets/Tshirts/KC00002.png';
import P4 from '../../../Assets/Tshirts/KC00003.png';
import P5 from '../../../Assets/Tshirts/KC00004.png';

import AMAZON from '../../../Assets/Logo/Companies/Amazon_logo.png';
import MYNTRAA from '../../../Assets/Logo/Companies/Myntra-Logo.png';
import AJIO from '../../../Assets/Logo/Companies/Ajio-Logo.png';
import FLIPKART from '../../../Assets/Logo/Companies/flipkart-logo.png';

export default function KenCarltonLanding() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const { current } = carouselRef;
    if (current) {
      const scrollAmount = 320;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-white text-black font-sans">
      <Helmet>
        <title>Ken Carlton - Luxury Apparel</title>
        <meta
          name="description"
          content="Ken Carlton redefines elegance with premium apparel and timeless watches. Discover luxury designed for modern sophistication."
        />
        <meta
          name="keywords"
          content="Ken Carlton, luxury clothing, premium watches, fashion brand, designer apparel"
        />
        <meta name="author" content="Ken Carlton" />
        <meta property="og:title" content="Ken Carlton - Premium Apparel & Watches" />
        <meta
          property="og:description"
          content="Explore Ken Carlton's elite collection of clothing and watches crafted with precision and passion."
        />
        <meta property="og:image" content="URL_to_your_brand_banner_or_logo" />
        <meta property="og:url" content="https://www.kencarlton.in" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Ken Carlton - Timeless Fashion & Style" />
        <meta
          name="twitter:description"
          content="Ken Carlton offers handcrafted luxury clothing and watches for the modern icon."
        />
        <meta name="twitter:image" content="URL_to_your_brand_banner_or_logo" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.kencarlton.in" />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Language" content="en" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Ken Carlton",
            "url": "https://www.kencarlton.in",
            "logo": "URL_to_logo_image",
            "description": "Ken Carlton is a luxury fashion brand offering premium apparel and watches.",
            "sameAs": [
              "https://www.instagram.com/kencarlton",
              "https://www.facebook.com/kencarltonofficial"
            ]
          })}
        </script>
      </Helmet>

      <section
        className="h-[500px] bg-cover bg-center flex items-center justify-center text-center relative"
        style={{ backgroundImage: `url(${BANNER})` }}
      >
        <div className="bg-black bg-opacity-60 w-full h-full absolute top-0 left-0" />
        <div className="relative z-10 text-white px-4" data-aos="fade-down">
          <h1 className="text-5xl md:text-7xl font-extralight tracking-wide">Ken Carlton Watches</h1>
          <p className="text-xl mt-4">Elegance. Precision. You.</p>
          <button className="mt-8 px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full">
            Coming Soon
          </button>
        </div>
      </section>

      <section className="py-16 px-6 md:px-24 bg-gray-50 relative">
        <h2 className="text-4xl font-light text-center mb-12" data-aos="fade-up">Our Signature</h2>

        <div className="flex justify-center relative" data-aos="fade-up">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 px-3 text-white rounded-full p-2 z-10 hover:bg-gray-200"
          >
            {'<'}
          </button>

          <div className="w-full max-w-5xl overflow-hidden">
            <div
              ref={carouselRef}
              className="flex gap-4 overflow-hidden scroll-smooth py-2 px-1 scrollbar-hide"
            >
              {[P1, P3, P4, P5].map((src, index) => (
                <div
                  key={index}
                  className="min-w-[300px] flex-shrink-0 transition-transform duration-200 transform hover:scale-105"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <img
                    src={src}
                    alt={`Tshirt ${index + 1}`}
                    className="rounded-xl w-full h-[400px] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 px-3 text-white rounded-full p-2 z-10 hover:bg-gray-200"
          >
            {'>'}
          </button>
        </div>

        <h3 className="text-2xl mt-6 font-medium text-center" data-aos="fade-in">Designer Apparel</h3>
        <p className="mt-2 text-gray-600 text-center" data-aos="fade-in">
          Crafted with finest fabrics and precision tailoring for timeless appeal.
        </p>
      </section>

      <section className="bg-white py-16 px-6 md:px-24">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-10" data-aos="zoom-in">We Sell On</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-items-center" data-aos="fade-up">
          <img src={AMAZON} alt="Amazon" className="h-10 md:h-12" />
          <img src={MYNTRAA} alt="Myntra" className="h-10 md:h-12" />
          <img src={AJIO} alt="Ajio" className="h-8 md:h-10" />
          <img src={FLIPKART} alt="Flipkart" className="h-8 md:h-10" />
        </div>

        <p className="text-center text-gray-600 mt-6 text-sm md:text-base" data-aos="fade-in">
          Explore our exclusive collections on India’s top fashion and lifestyle marketplaces.
        </p>
      </section>

      <section className="bg-black text-white py-20 px-6 text-center" data-aos="fade-up">
        <h2 className="text-3xl mb-6">Become Part of the Legacy</h2>
        <p className="text-lg mb-8">Join the movement of timeless style and modern sophistication.</p>
        <a href="mailto:kencarltonindia@gmail.com?subject=Join%20Ken%20Carlton&body=Hi%20Ken%20Carlton%2C%20I%20would%20like%20to%20join%20the%20movement.">
          <button className="px-6 py-3 border border-white hover:bg-white hover:text-black transition rounded-full">
            Join Us
          </button>
        </a>
      </section>

      <footer className="bg-white py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Ken Carlton. All rights reserved.
      </footer>
    </div>
  );
}
