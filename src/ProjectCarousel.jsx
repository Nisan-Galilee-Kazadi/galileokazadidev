import React, { useState } from "react";
import Alsquare from "./images/alsquare.png";
import AcceuilEcole from "./images/acceuilecole.png";
import Agency from "./images/agency.png";
import Hik from "./images/hik.png";
import PortfolioImg from "./images/porfolio4.jpg";
import KatGlamour from "./images/katglamours.jpg";
import EvaneLesnar from "./images/portfolioEvane.png";
import Betterlife from "./images/betterlifeImage.jpg";
// Les images suivantes doivent être déplacées dans le dossier public
import NamsterImg from "./images/Namster.png";
import AssistTrackerImg from "/assistTracker.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


const projects = [
  {
    title: "Formations et Service ",
    image: Alsquare,
    link: "https://alsquareexpertise.org",
    description:
      "Pour ce premier projet, j'ai conçu un site vitrine dédié à la présentation d'une école en ligne...",
  },
  {
    title: "Ecole en ligne",
    image: AcceuilEcole,
    link: "https://cicafecole.netlify.app",
    description:
      "Le deuxième projet consistait à développer une application métier complète pour la gestion interne de l'école...",
  },
  {
    title: "E-commerce",
    image: Agency,
    link: "https://digi-agency.netlify.app",
    description:
      "Pour ce troisième projet, j'ai élaboré une template e-commerce clé en main...",
  },
  {
    title: "E-Services",
    image: Hik,
    link: "https://hvtech.netlify.app",
    description:
      "Ce projet visait à créer un site vitrine orienté 'commande de services techniques'...",
  },
  {
    title: "Portfolio",
    image: PortfolioImg,
    link: "https://galileokazadidev.netlify.app",
    description:
      "Mon propre portfolio a été pensé comme une vitrine de mes compétences et de mes réalisations...",
  },
  {
    title: "E-Reservations",
    image: KatGlamour,
    link: "https://katglam.netlify.app",
    description:
      "Enfin, j'ai développé un site de réservation pour un institut de beauté...",
  },
  {
    title: "Namster",
    image: NamsterImg,
    link: "https://naminsert.netlify.app/",
    description:
      "Namster automatise l'ajout des noms sur les invitations. Téléversez votre modèle, importez une liste de noms et générez en masse des invitations personnalisées, prêtes à l'impression en quelques secondes.",
  },
  {
    title: "AssistTracker",
    image: AssistTrackerImg,
    link: "https://assisttracker.netlify.app",
    description:
      "AssistTracker facilite le comptage d'assistance en temps réel. Suivez les présences, visualisez des statistiques instantanées et exportez des rapports pour vos événements ou réunions.",
  },
  {
    title: "EvaneLesnarPortfolio",
    image: EvaneLesnar,
    link: "https://evanelesnar.netlify.app/",
    description:
      "Un portfolio retraçant en détail le parcours complet de l'artiste humouriste Evane Lesnar.",
  },
  {
    title: "Better Life DRC site Officiel",
    image: Betterlife,
    link: "https://betterlife-ong.netlify.app",
    description:
      "Le site Officiel d'un organisme internationale de production et securité alimentaire.",
  },
];

function ProjectCarousel() {
  const [openDetail, setOpenDetail] = useState(null);
  return (
    <div className="w-full max-w-6xl mx-auto mt-12">
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={projects.length > 2} // Active le loop uniquement si plus de 2 projets
        autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          // Mobile
          320: { 
            slidesPerView: 1,
            spaceBetween: 16
          },
          // Tablette
          640: { 
            slidesPerView: 1.5,
            spaceBetween: 20
          },
          // Desktop (à partir de 1024px)
          1024: { 
            slidesPerView: 2,
            spaceBetween: 32,
            loop: projects.length > 2
          }
        }}
        className="relative"
      >
        {projects.map((project, idx) => (
          <SwiperSlide key={project.title}>
            <div className="relative bg-[#222] rounded-xl shadow-lg overflow-hidden flex flex-col min-h-[260px] md:min-h-[220px]">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div
                  className="h-64 md:h-80 w-full bg-cover bg-center flex items-end"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-[rgba(0,0,0,0)] z-10" />
                  <h3 className="relative z-20 text-2xl md:text-3xl font-bold text-white p-4">
                    {project.title}
                  </h3>
                </div>
              </a>
              <button
                className="bg-[#c9f31d] text-[#181818] font-bold py-2 px-4 m-4 rounded-lg hover:bg-[#b6db1a] transition-colors z-20"
                onClick={() => setOpenDetail(openDetail === idx ? null : idx)}
              >
                {openDetail === idx
                  ? "Fermer les détails"
                  : "Voir plus de détails"}
              </button>
              <div
                className={`transition-all duration-500 overflow-hidden bg-[#181818] px-6 pb-4 ${
                  openDetail === idx ? "max-h-96 py-4" : "max-h-0 py-0"
                }`}
              >
                <p className="pt-3 text-white text-base md:text-lg">
                  {project.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-[#c9f31d] text-[#181818] p-3 rounded-full shadow-lg cursor-pointer flex items-center justify-center text-xl hover:bg-[#b6db1a] transition-colors">
          <FaChevronLeft />
        </div>
        <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[#c9f31d] text-[#181818] p-3 rounded-full shadow-lg cursor-pointer flex items-center justify-center text-xl hover:bg-[#b6db1a] transition-colors">
          <FaChevronRight />
        </div>
      </Swiper>
    </div>
  );
}

export default ProjectCarousel;
