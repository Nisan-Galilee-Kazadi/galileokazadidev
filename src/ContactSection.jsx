import { IntroText, Section, SubTitle, CoverText, Button } from "./App";
import "../src/App.css";
import { P, Span } from "./ui";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useRef, useState } from "react";
import Swal from "sweetalert2";

// Clé d'accès à Web3Forms
const WEB3FORMS_ACCESS_KEY = "00b59229-53c0-4777-9e71-8a937ab48a60";

function ContactSection({ darkMode }) {
  const formRef = useRef();
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const formData = new FormData(formRef.current);
      formData.append('access_key', WEB3FORMS_ACCESS_KEY);
      formData.append('subject', 'Nouveau message de contact');
      formData.append('from_name', 'Formulaire de contact');
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setStatus("success");
        formRef.current.reset();
        
        Swal.fire({
          icon: 'success',
          title: 'Message envoyé !',
          text: 'Je vous répondrai dans les plus brefs délais.',
          showConfirmButton: false,
          timer: 3000,
          background: '#232323',
          color: '#c9f31d'
        });
      } else {
        throw new Error(data.message || 'Erreur lors de l\'envoi du formulaire');
      }
    } catch (error) {
      console.error("Erreur:", error);
      setStatus("error");
      
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: error.message || 'Une erreur est survenue. Veuillez réessayer plus tard.',
        background: '#232323',
        color: '#c9f31d'
      });
    }
  };

  return (
    <Section id="contact" margin={"-130px"} darkMode={darkMode}>
      <div className="devContact max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-y-12 md:gap-x-12 px-2 md:px-6">
        <div className="devContactLeft flex-1">
          <SubTitle>
            <span className="text-2xl md:text-4xl">Entrons en Contact</span>
          </SubTitle>
          <CoverText margin={"-55px"}>Contacts</CoverText>
          <IntroText>
            <span className="text-lg md:text-2xl">
              Parlons de votre <Span color={"#c9f31d"}>Prochain Projet</Span>
            </span>
          </IntroText>
          <p className="text-base md:text-lg">
            Parlons-en et construisons ensemble une solution sur
            mesure,performanrte et evolutive. Puisque votre projet mérite une
            présence en ligne à la hauteur de vos ambitions !
          </p>
          {/* <div className="devCompetence mt-6 space-y-2">
            <p>
              <i className="fas fas fa-check-circle"></i> 1+ Années d'expérience
            </p>
            <p>
              <i className="fas fas fa-check-circle"></i> Web Developpeur
              proffesionnel
            </p>
            <p>
              <i className="fas fas fa-check-circle"></i> Créateur des App Web
            </p>
            <p>
              <i className="fas fas fa-check-circle"></i> Designer Responsive
            </p>
          </div> */}
        </div>
        <div className="w-full pt-0 md:pt-0 flex-1 flex items-center justify-center">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-[#181818] py-10 px-5 rounded-xl shadow-lg max-w-xl w-full flex flex-col gap-6"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col flex-1">
                <label
                  htmlFor="name"
                  className="font-semibold text-[#c9f31d] mb-1"
                >
                  Nom Complet<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  placeholder="Del Cultura Señor"
                  className="p-3 rounded-lg bg-[#222] text-white border border-[#333] focus:border-[#c9f31d] focus:ring-2 focus:ring-[#c9f31d] outline-none"
                  required
                />
              </div>
              <div className="flex flex-col flex-1">
                <label
                  htmlFor="email"
                  className="font-semibold text-[#c9f31d] mb-1"
                >
                  Adresse E-mail<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  placeholder="galileokazadi@gmail.com"
                  className="p-3 rounded-lg bg-[#222] text-white border border-[#333] focus:border-[#c9f31d] focus:ring-2 focus:ring-[#c9f31d] outline-none"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col flex-1">
                <label
                  htmlFor="tel"
                  className="font-semibold text-[#c9f31d] mb-1"
                >
                  Numéro de téléphone<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="user_phone"
                  id="tel"
                  placeholder="+243 84 208 11 80"
                  className="p-3 rounded-lg bg-[#222] text-white border border-[#333] focus:border-[#c9f31d] focus:ring-2 focus:ring-[#c9f31d] outline-none"
                  required
                />
              </div>
              <div className="flex flex-col flex-1">
                <label
                  htmlFor="subject"
                  className="font-semibold text-[#c9f31d] mb-1"
                >
                  Objet
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Besoin d'un site..."
                  className="p-3 rounded-lg bg-[#222] text-white border border-[#333] focus:border-[#c9f31d] focus:ring-2 focus:ring-[#c9f31d] outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="font-semibold text-[#c9f31d] mb-1"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Écrivez votre message..."
                className="p-3 rounded-lg bg-[#222] text-white border border-[#333] focus:border-[#c9f31d] focus:ring-2 focus:ring-[#c9f31d] outline-none min-h-[120px]"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-2 bg-[#c9f31d] text-[#181818] font-bold py-3 rounded-lg hover:bg-[#b6db1a] transition-colors"
            >
              Soumettre le message
            </button>
            {status === "success" && (
              <p className="text-green-500 font-bold">
                Message envoyé avec succès !
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 font-bold">
                Erreur lors de l'envoi. Veuillez réessayer.
              </p>
            )}
          </form>
        </div>
      </div>
    </Section>
  );
}
export default ContactSection;
