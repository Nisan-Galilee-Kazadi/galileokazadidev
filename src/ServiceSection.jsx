import "../src/App.css";
import "./animations.css";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { P, Section, Span, SubTitle, CoverText, IntroText } from "./App";

// Composant pour la rangée de défilement infini
const InfiniteScrollRow = ({ children, direction = 'left', speed = '40s' }) => {
  return (
    <div className="overflow-hidden w-full py-4">
      <div 
        className={`flex gap-4 w-max ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}
        style={{ '--speed': speed }}
      >
        {children}
        {children} {/* Duplication pour un défilement fluide */}
      </div>
    </div>
  );
};

export function ServiceCard({ children, index, className = '', isScrolling = false }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: isScrolling, amount: 0.2 });
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -30,
      scale: 0.95
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        delay: isScrolling ? 0 : i * 0.1,
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      }
    }),
    hover: {
      y: -10,
      rotateY: 5,
      boxShadow: "0 20px 40px rgba(201, 243, 29, 0.15)",
      borderColor: "#c9f31d",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`group bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] flex-shrink-0 flex flex-row text-start items-start justify-start border-2 border-[#2a2a2a] gap-5 w-72 md:w-auto h-full px-6 py-5 rounded-xl focus:border-[#c9f31d] relative overflow-hidden ${className} ${isScrolling ? 'mx-2' : ''}`}
      custom={index}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={isScrolling ? {} : "hover"}
      variants={cardVariants}
      onHoverStart={() => !isScrolling && setIsHovered(true)}
      onHoverEnd={() => !isScrolling && setIsHovered(false)}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      {/* Effet de lueur au survol */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#c9f31d10] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Contenu de la carte */}
      <div className="relative z-10 flex flex-col h-full">
        {children}
      </div>
      
      {/* Effet de bordure animée */}
      <motion.div 
        className="absolute inset-0 border-2 border-transparent rounded-xl pointer-events-none"
        animate={{
          borderColor: isHovered ? "rgba(201, 243, 29, 0.3)" : "rgba(0, 0, 0, 0)",
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Ligne de soulignement animée */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#c9f31d] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
      
      {/* Effet de reflet */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
export function CardNum({ children }) {
  return (
    <motion.span 
      className="flex flex-row items-center justify-center text-center font-semibold border-[2px] h-10 w-10 p-2 border-[#fff] rounded-[100%] group-hover:border-[#c9f31d] relative overflow-hidden"
      whileHover={{
        scale: 1.1,
        rotate: 360,
        transition: { duration: 0.5, type: "spring" }
      }}
    >
      <motion.span
        className="absolute inset-0 bg-gradient-to-br from-[#c9f31d20] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      <motion.span
        className="relative z-10"
        whileHover={{ color: "#c9f31d" }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}

export function CardTitle({ children }) {
  return (
    <motion.h4 
      className="text-[#b8b8b8] text-[14px] font-bold relative inline-block"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5, delay: 0.2 }
      }}
      viewport={{ once: true }}
    >
      <span className="relative z-10">{children}</span>
      <motion.span 
        className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#c9f31d] group-hover:w-full transition-all duration-500"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
      />
    </motion.h4>
  );
}

const ServiceSection = ({ darkMode }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const [isMobile, setIsMobile] = useState(false);

  // Vérifier si on est sur mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  // Données des services
  const services = [
    {
      id: 1,
      title: "Création de sites vitrines",
      description: "Des sites élégants, performants et responsive pour présenter votre activité",
      icon: "01"
    },
    {
      id: 2,
      title: "Optimisation des performances Web",
      description: "Pour un chargement rapide, un meilleur SEO et une expérience utilisateur optimale",
      icon: "02"
    },
    {
      id: 3,
      title: "Design responsive adaptatif",
      description: "Votre site s'affiche parfaitement sur tous les écrans : mobile, tablette et ordinateur",
      icon: "03"
    },
    {
      id: 4,
      title: "Applications web sur mesure",
      description: "Développement d'applications web personnalisées pour répondre à vos besoins spécifiques",
      icon: "04"
    },
    {
      id: 5,
      title: "Maintenance & Support",
      description: "Un accompagnement continu pour assurer le bon fonctionnement de votre site",
      icon: "05"
    },
    {
      id: 6,
      title: "Référencement SEO",
      description: "Améliorez votre visibilité sur les moteurs de recherche avec nos stratégies SEO",
      icon: "06"
    }
  ];
  return (
    <Section
      margin={"-150px"}
      id="service"
      className="serviceSection relative overflow-hidden"
      darkMode={darkMode}
    >
      {/* Effet de particules flottantes */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#c9f31d40]"
          style={{
            width: Math.random() * 8 + 4 + 'px',
            height: Math.random() * 8 + 4 + 'px',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            filter: 'blur(1px)'
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, (Math.random() - 0.5) * 50, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 5
          }}
        />
      ))}
      <motion.div 
        ref={containerRef}
        className="flex flex-col gap-5 max-w-5xl mx-auto px-2 md:px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <SubTitle zIndex={30}>
          <span className="text-2xl md:text-4xl">Mes service phrares</span>
        </SubTitle>
        <CoverText margin={"-70px"} zIndex={20} id="imposter">
          Mes services
        </CoverText>
        <IntroText>
          <span className="text-lg md:text-2xl">
            Mon Service Spécial Pour le
            <Span color={"#c9f31d"}> Developement de votre entreprise</Span>
          </span>
        </IntroText>
        {/* Version mobile - Défilement infini */}
        <div className="md:hidden w-full overflow-hidden py-4">
          <InfiniteScrollRow direction="left">
            {services.map((service, index) => (
              <ServiceCard key={`mobile-${service.id}`} index={index} isScrolling={true}>
                <CardNum>{service.icon}</CardNum>
                <div className="mt-2">
                  <CardTitle>{service.title}</CardTitle>
                  <P className="text-sm text-gray-400">{service.description}</P>
                </div>
              </ServiceCard>
            ))}
          </InfiniteScrollRow>
        </div>

        {/* Version desktop - Grille normale */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {services.map((service, index) => (
            <ServiceCard key={`desktop-${service.id}`} index={index}>
              <div className="flex items-center gap-4 mb-3">
                <CardNum>{service.icon}</CardNum>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </div>
              <P className="text-sm text-gray-400 mt-2">{service.description}</P>
              
              {/* Bouton en savoir plus */}
              <motion.div 
                className="mt-4 flex items-center text-[#c9f31d] text-sm font-medium cursor-pointer group-hover:underline"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                En savoir plus
                <svg 
                  className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.div>
            </ServiceCard>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default ServiceSection;
