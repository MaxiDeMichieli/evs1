import { useNavigate } from "react-router-dom";
import { useContext } from "../context/ContextProvider";
import Footer from "./Footer";
import Header from "./Header";
import Arrow from "./Arrow";
import Map from "./Map";
import { Button } from "@mui/material";

const Destination = () => {
  const { context } = useContext();
  const navigate = useNavigate();
  const destination = context.destinations.find(
    (destination) => destination.id === 4
  );

  return (
    <div className="flex justify-center flex-col items-center">
      <Header />
      <div className="relative flex justify-center w-full px-3 md:px-6 lg:px-16 min-h-screen overflow-x-hidden">
        <div
          className="absolute top-0 left-0 bg-cover bg-center w-full h-44 transition-transform transform scale-105 duration-300 destination-image"
          style={{ backgroundImage: `url(/cordoba-banner.avif)` }}
        />
        <div className="absolute top-0 left-0 w-full h-44 bg-black opacity-25" />
        <div className="w-full max-w-7xl z-10">
          <div className="h-44 flex items-center">
            <h2 className="text-5xl font-bold text-white">{destination?.to}</h2>
          </div>
          <div className="mt-10 text-gray-800">
            <div className="flex items-center text-xl">
              <span className="mr-2">{destination?.from}</span>
              <Arrow />
              <span className="ml-2">{destination?.to}</span>
            </div>
            <span className="text-sm">{destination?.date}</span>
            <div className="mt-6">
              <span className="text-xl">Paradas:</span>
              <div className="flex flex-col sm:flex-row">
                <Map />
                <ul className="list-disc list-inside md:ml-6">
                  <li>
                    Retiro (Buenos Aires) <b>Sale 08:30hs</b>
                  </li>
                  <li>
                    Rosario (Santa Fe) <b>Llega 12:30hs, sale 12:45h</b>
                  </li>
                  <li>
                    Villa María (Córdoba) <b>Llega 15:30hs, sale 15:45h</b>
                  </li>
                  <li>
                    Córdoba (Córdoba) <b>Llega 17:30hs</b>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0084AB] h-28 w-full sticky bottom-0 left-0 z-50 shadow-inner flex justify-center">
        <div className="max-w-7xl w-full h-full flex justify-center items-center">
          <span className="text-white text-xl mr-6">
            Desde ${destination?.price}
          </span>
          {context.user ? (
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() =>
                navigate(`/destination/${destination?.id}/buy-ticket/seats`)
              }
            >
              Comprar
            </Button>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => navigate(`/login`)}
            >
              Iniciar sesión
            </Button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Destination;
