import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-3 md:px-6 lg:px-16 bg-[#0084AB]">
      <div className="flex flex-col sm:flex-row justify-between text-white w-full max-w-7xl py-16">
        <div className="flex flex-col sm:w-1/3">
          <span className="font-bold py-1">Contacto</span>
          <span className="text-sm py-1">+54 9 11 5555-5555</span>
          <span className="text-sm py-1">contacto@tags.com</span>
          <span className="text-sm py-1">Juan María Gutiérrez 1150</span>
          <span className="text-sm py-1">
            Los Polvorines, Provincia de Buenos Aires, Argentina
          </span>
        </div>
        <div className="flex flex-col sm:w-1/3">
          <span className="font-bold py-1">Soporte</span>
          <Link to="/" className="text-sm py-1">
            Preguntas frecuentes
          </Link>
          <Link to="/" className="text-sm py-1">
            Políticas de privacidad
          </Link>
          <Link to="/" className="text-sm py-1">
            Términos y condiciones
          </Link>
        </div>
        <div className="flex flex-col sm:w-1/3">
          <span className="font-bold py-1">
            Sobre Transportes Automotores General Sarmiento
          </span>
          <Link to="/" className="text-sm py-1">
            Quienes somos
          </Link>
        </div>
      </div>
      <div className="w-full max-w-7xl">
        <p className="text-xs text-center text-white py-3 border-t-2 border-opacity-25 border-white">
          Copyright © 2023 Transportes Automotores General Sarmiento. Todos los
          derechos reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;
