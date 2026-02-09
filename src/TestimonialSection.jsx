import { IntroText, Section, SubTitle, CoverText, Button } from "./App";
import "../src/App.css";
import { P, Span } from "./ui";
import "@fortawesome/fontawesome-free/css/all.min.css";
import BigIcon from "./images/big-icon.webp";
import Katcomment from "./images/katcomment.webp"
import EvanelesnarImage from "./images/EvanelesnarImage.webp"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  
  {
    name: "Evane Lesnar Bukasa",
    role: "Artiste Humoriste",
    img: EvanelesnarImage,
    text: "Nissan Galieo m'a permis d'avoir un portfolio, qui me permet maintenant d'avoir quelque chose qui retrace ma carrière humoristique du début jusqu'à maintenant et au-delà de ça je peux y mettre toutes les informations nécessaires concernant mes activités à venir. Grâce à ça, quelqu'un peut se faire une idée de qui je suis en tant qu'humoriste et connaître mon programme, mieux encore se procurer des billets pour mes événements. Je lui suis très reconnaissant et je recommande ses services à n'importe qui, qui voudrait se professionnaliser dans son domaine.",
  },
  {
    name: "Rosette Kajinda Tshilenge",
    role: "CEO Kat Glamour",
    img: Katcomment,
    text: "Grâce à la création de mon site web, j’ai aujourd’hui une plateforme claire, pratique et parfaitement adaptée à mon activité Il m’a permis de mieux organiser mon entreprise et surtout de faciliter les réservations pour mes clientes, ce qui a considérablement amélioré mon quotidien.L’écoute, la compréhension de mes besoins et le professionnalisme ont fait toute la différence.Je recommande ce service sans hésitation.",
  },
  // Ajoute d'autres témoignages ici si besoin
];

function TestimonialSection({ darkMode }) {
  return (
    <Section id="testimoniale" margin={"-170px"} darkMode={darkMode}>
      <div className="devFeedback max-w-5xl mx-auto px-2 md:px-6">
        <div className="feedbackIntro">
          <SubTitle>
            <span className="text-2xl md:text-4xl">Témoignages Client</span>
          </SubTitle>
          <CoverText margin={"-55px"}>Témoignages </CoverText>
          <IntroText>
            <span className="text-lg md:text-2xl">
              Nous avons plus de 5{" "}
              <Span color="#c9f31d">Temoignages positif </Span>de nos Clients
            </span>
          </IntroText>
          <P>
            {" "}
            Ils m'ont fait confiance ; Decouvrez ce qui dit tant par mes
            colaborateurs que par mes client,leurs retours vous en dis long sur
            la proactivité et la riguer de mes service.
          </P>

        </div>
        <div className="clientFeeds mt-8 relative">
          {/* Bouton Précédent Tailwind */}
          <button
            type="button"
            className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-[#c9f31d] text-[#181818] p-3 rounded-full shadow-lg cursor-pointer flex items-center justify-center text-xl hover:bg-[#b6db1a] transition-colors"
          >
            <FaChevronLeft />
          </button>
          {/* Swiper */}
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={testimonials.length > 2} // Active le loop uniquement si plus de 2 témoignages
            autoplay={{ 
              delay: 4000, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true 
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              640: { 
                slidesPerView: 1,
                loop: testimonials.length > 2
              },
              768: { 
                slidesPerView: 1.5,
                loop: testimonials.length > 3 // Active le loop sur desktop uniquement si plus de 3 témoignages
              },
              1024: {
                slidesPerView: 2,
                loop: testimonials.length > 3
              }
            }}
          >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="feedCard bg-[#181818] shadow-lg border border-[#333] rounded-xl p-6 flex flex-col items-center hover:shadow-2xl transition-all duration-300 hover:border-[#c9f31d] hover:border-opacity-50">
                <div className="profile flex flex-col items-center mb-4">
                  <span className="text-3xl text-[#c9f31d] mb-2">''</span>
                  <img
                    src={t.img}
                    alt="client"
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full border-3 border-[#c9f31d] object-cover shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-center text-base md:text-lg mb-4">
                  {t.text}
                </p>
                <h5 className="font-bold text-[#c9f31d] text-lg">{t.name}</h5>
                <h6 className="text-[#aaa] text-sm">{t.role}</h6>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
          <button
            type="button"
            className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[#c9f31d] text-[#181818] p-3 rounded-full shadow-lg cursor-pointer flex items-center justify-center text-xl hover:bg-[#b6db1a] transition-colors"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </Section>
  );
}
export default TestimonialSection;
