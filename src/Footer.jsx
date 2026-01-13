import "@fortawesome/fontawesome-free/css/all.min.css";
import { useRef, useState } from "react";
import Swal from "sweetalert2";

// Clé d'accès à Web3Forms
const WEB3FORMS_ACCESS_KEY = "00b59229-53c0-4777-9e71-8a937ab48a60";

function Footer() {
  const formRef = useRef();
  const [subscriberEmail, setSubscriberEmail] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    if (!subscriberEmail) {
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Veuillez entrer une adresse email valide',
        background: '#232323',
        color: '#c9f31d'
      });
      return;
    }

    try {
      const formData = new FormData();
      formData.append('access_key', WEB3FORMS_ACCESS_KEY);
      formData.append('email', subscriberEmail);
      formData.append('subject', 'Nouvel abonné à la newsletter');
      formData.append('from_name', 'Formulaire newsletter');
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Inscription réussie !',
          text: 'Merci pour votre inscription à notre newsletter',
          showConfirmButton: false,
          timer: 3000,
          background: '#232323',
          color: '#c9f31d'
        });
        setSubscriberEmail('');
        if (formRef.current) formRef.current.reset();
      } else {
        throw new Error(data.message || 'Erreur lors de l\'envoi du formulaire');
      }
    } catch (error) {
      console.error('Erreur:', error);
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
    <footer className="bg-[#181818] text-white pt-10 pb-4 px-4">
      <div className="footerTop flex flex-col md:flex-row justify-between gap-8 max-w-6xl mx-auto">
        <div id="logo" className="text-2xl font-bold mb-6 md:mb-0">
          <span className="text-[#c9f31d]">#DCS</span>portfolio
        </div>
        <div className="quickLink flex-1 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Quick link</h3>
          <ul className="menuList flex flex-col md:flex-row gap-2 mb-4">
            <li className="item">
              <a href="#home" className="hover:text-[#c9f31d]">
                Acceuil
              </a>
            </li>
            <li className="item">
              <a href="#about" className="hover:text-[#c9f31d]">
                A propos
              </a>
            </li>
            <li className="item">
              <a href="#service" className="hover:text-[#c9f31d]">
                Service
              </a>
            </li>
            <li className="item">
              <a href="#skills" className="hover:text-[#c9f31d]">
                Skills
              </a>
            </li>
            <li className="item">
              <a href="#porfolio" className="hover:text-[#c9f31d]">
                Portfolio
              </a>
            </li>
            <li className="item">
              <a href="#testimoniale" className="hover:text-[#c9f31d]">
                Notes
              </a>
            </li>
            <li className="item">
              <a href="#contact" className="hover:text-[#c9f31d]">
                Contact
              </a>
            </li>
          </ul>
          <form
            ref={formRef}
            onSubmit={handleSubscribe}
            className="search flex gap-0 w-[90%] "
          >
            <input
              type="email"
              name="subscriber_email"
              placeholder="Votre email"
              className="p-2 rounded-l bg-[#222] border border-[#333] text-white focus:border-[#c9f31d] outline-none w-full"
              required
              value={subscriberEmail}
              onChange={(e) => setSubscriberEmail(e.target.value)}
            />
            <input
              type="hidden"
              name="message"
              value={`Je souscris à vos services. Email : ${subscriberEmail}`}
            />
            <button
              type="submit"
              className="bg-[#c9f31d] text-[#181818] px-4 rounded-r font-semibold hover:bg-[#b6db1a] transition-colors"
            >
              S'inscrire
            </button>
          </form>
        </div>
        <div className="Address flex-1 -mt-8">
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <p className="mb-1">
            <i className="fas fa-map-signs mr-2 text-[#c9f31d]"></i>29 Avenue
            Niangara, Kinshasa/Ngiri-Ngiri
          </p>
          <p className="mb-1">
            <i className="fas fa-mail-bulk mr-2 text-[#c9f31d]"></i>
            galileokazadi45@gmail.com
          </p>
          <p>
            <i className="fas fa-phone mr-2 text-[#c9f31d]"></i>+243 84 208 11
            80 / 81 6 555 093
          </p>
        </div>
      </div>
      <div className="footerBottom border-t border-[#333] mt-8 pt-4 max-w-6xl mx-auto">
        <ul className="Links flex flex-wrap gap-4 justify-center">
          <li className="item">
            <a
              href="https://m.facebook.com/nissanniska.kazadi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c9f31d]"
            >
              Facebook
            </a>
          </li>
          <li className="item">
            <a
              href="https://x.com/GalileoKazadi45"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c9f31d]"
            >
              Twitter
            </a>
          </li>
          <li className="item">
            <a
              href="https://wa.me/+243842081180"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c9f31d]"
            >
              WhatsApp
            </a>
          </li>
          <li className="item">
            <a
              href="https://www.linkedin.com/in/galil%C3%A9e-kazadi-4112a833b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c9f31d]"
            >
              Linkedin
            </a>
          </li>
          <li className="item">
            <a
              href="https://github.com/Nisan-Galilee-Kazadi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c9f31d]"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
      <div className="text-center text-xs text-[#bbb] pt-4">
        &copy; {new Date().getFullYear()} <span className="font-bold text-[#c9f31d] text-[12px]">#DCS</span><span className="text-[#fff]">dev</span> . Tous droits réservés.
      </div>
    </footer>
  );
}

export default Footer;
