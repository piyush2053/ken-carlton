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
  const products = [
    { img: P1, label: "Classic Black Tee", alt: "Ken Carlton Classic Black T-Shirt" },
    { img: P3, label: "White Minimal Tee", alt: "Ken Carlton White Minimalist T-Shirt" },
    { img: P4, label: "Linen Blues", alt: "Ken Carlton Urban Street T-Shirt" },
    { img: P5, label: "Red Bull Edition", alt: "Ken Carlton Signature Logo T-Shirt" },
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-white text-black font-sans">
      <Helmet>
        <title>Ken Carlton - Luxury Apparel & Watches</title>
        <meta name="description" content="Ken Carlton redefines elegance with premium apparel and timeless watches. Discover luxury designed for modern sophistication." />
        <meta name="keywords" content="Ken Carlton, luxury clothing, premium watches, fashion brand, designer apparel, Amazon, Myntra, Flipkart, Ajio" />
        <meta name="author" content="Ken Carlton" />
        <meta property="og:title" content="Ken Carlton - Premium Apparel & Watches" />
        <meta property="og:description" content="Explore Ken Carlton's elite collection of clothing and watches crafted with precision and passion. Available on Amazon, Myntra, Flipkart, and Ajio." />
        <meta property="og:image" content="URL_to_your_brand_banner_or_logo" />
        <meta property="og:url" content="https://www.kencarlton.in" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Ken Carlton - Timeless Fashion & Style" />
        <meta name="twitter:description" content="Ken Carlton offers handcrafted luxury clothing and watches for the modern icon. Available on Amazon, Myntra, Flipkart, and Ajio." />
        <meta name="twitter:image" content="URL_to_your_brand_banner_or_logo" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.kencarlton.in" />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Language" content="en" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Ken Carlton Apparel",
            "brand": "Ken Carlton",
            "offers": {
              "@type": "AggregateOffer",
              "availability": "https://schema.org/InStock",
              "seller": [
                {
                  "@type": "Organization",
                  "name": "Amazon India",
                  "url": "https://www.amazon.in/s?k=ken+carlton"
                },
                {
                  "@type": "Organization",
                  "name": "Myntra",
                  "url": "https://www.myntra.com/ken-carlton"
                },
                {
                  "@type": "Organization",
                  "name": "Ajio",
                  "url": "https://www.ajio.com/ken-carlton"
                },
                {
                  "@type": "Organization",
                  "name": "Flipkart",
                  "url": "https://www.flipkart.com/search?q=ken+carlton"
                }
              ]
            }
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

      <section className="py-5 px-6 md:px-24 bg-gray-50 relative">
        <h2 className="text-5xl font-light text-center mb-2 mt-4" data-aos="fade-up">Our Signature</h2>
        <p className="text-gray-600 text-center mt-4 mb-3" data-aos="fade-in">
          Crafted with finest fabrics and precision tailoring for timeless appeal.
        </p>
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
              {products.map(({ img, label, alt }, index) => (
                <div
                  key={index}
                  className="min-w-[280px] flex-shrink-0 transition-transform duration-200 transform hover:scale-105"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="relative bg-white rounded-xl">
                    <img
                      src={img}
                      alt={alt}
                      className="rounded-xl w-full h-[250px] sm:h-[300px] md:h-[400px] object-contain"
                    />
                  </div>
                  <p className="text-center text-sm text-gray-600 mt-2">{label}</p>
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


      </section>

      <section className="bg-white py-16 px-6 md:px-24">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-10" data-aos="fade-up">We Sell On</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-items-center" data-aos="fade-up">
          <img src={AMAZON} alt="Amazon" className="h-10 md:h-12" />
          <img src={MYNTRAA} alt="Myntra" className="h-10 md:h-12" />
          <img src={AJIO} alt="Ajio" className="h-8 md:h-10" />
          <img src={FLIPKART} alt="Flipkart" className="h-8 md:h-10" />
        </div>

        <p className="text-center text-gray-600 mt-6 text-sm md:text-base" data-aos="fade-up">
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
