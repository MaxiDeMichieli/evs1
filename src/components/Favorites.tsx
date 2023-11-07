import { useNavigate } from "react-router-dom";
import { useContext } from "../context/ContextProvider";
import Footer from "./Footer";
import Header from "./Header";
import Hearth from "./Hearth";
import "./Favorites.scss";

const Favorites = () => {
  const { context, setContext } = useContext();
  const navigate = useNavigate();

  const toggleFavorite = (destinationId: string) => {
    setContext({
      favorites: {
        ...context.favorites,
        [destinationId]: !context.favorites[destinationId],
      },
    });

    const favoritesStorage = localStorage.getItem("favorites");
    const favorites = favoritesStorage ? JSON.parse(favoritesStorage) : {};
    favorites[destinationId] = !favorites[destinationId];
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
    <div className="flex flex-col justify-between items-center min-h-screen">
      <div className="w-full flex flex-col justify-center">
        <Header />
        <div className="flex justify-center w-full px-3 md:px-6 lg:px-16 mb-24">
          <div className="w-full max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-4 pt-10">
              Destinos favoritos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {context.destinations
                .filter((dest) => context.favorites[dest.id])
                .map((destination) => (
                  <div
                    className="relative bg-white p-4 shadow-md rounded-md overflow-hidden min-h-[220px] destination-hover cursor-pointer"
                    onClick={() => navigate("/destination/" + destination.id)}
                  >
                    <div
                      className="absolute top-0 left-0 bg-cover bg-center w-full h-full transition-transform transform scale-105 duration-300 destination-image"
                      style={{ backgroundImage: `url(${destination.image})` }}
                    ></div>
                    <div className="w-full h-full flex z-10 relative flex-col justify-end">
                      <span className="font-extrabold text-white text-xl">
                        {destination.to} ${destination.price}
                      </span>
                      <span className="font-medium text-white text-sm">
                        Desde {destination.from}
                      </span>
                      <span className="font-light text-white text-sm">
                        {destination.date}
                      </span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-gray-900" />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(destination.id as unknown as string);
                      }}
                      className={`absolute top-2 right-2 h-6 w-6 text-xl z-20 text-red-500 ${
                        context.favorites[destination.id]
                          ? "fill-current"
                          : "fill-transparent"
                      }`}
                    >
                      <Hearth />
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Favorites;
