import {
  SetStateAction,
  createContext,
  useContext as useReactContext,
  useState,
} from "react";

const favoritesStorage = localStorage.getItem("favorites");
const userStorage = localStorage.getItem("user");

const defaultContext = {
  context: {
    user: userStorage ? JSON.parse(userStorage) : null,
    destinations: [
      {
        id: 1,
        image: "/mendoza.avif",
        from: "Buenos Aires",
        to: "Mendoza",
        price: "21.200",
        date: "12/11/2023 06:30hs",
      },
      {
        id: 2,
        image: "/bariloche.avif",
        from: "Buenos Aires",
        to: "San Carlos de Bariloche",
        price: "25.500",
        date: "13/11/2023 15:00hs",
      },
      {
        id: 3,
        image: "/iguazu.avif",
        from: "Buenos Aires",
        to: "Cataratas del Iguazú",
        price: "26.100",
        date: "09/11/2023 16:00hs",
      },
      {
        id: 4,
        image: "/cordoba.avif",
        from: "Buenos Aires",
        to: "Córdoba",
        price: "16.700",
        date: "16/11/2023 08:30hs",
      },
      {
        id: 5,
        image: "/salta.avif",
        from: "Buenos Aires",
        to: "Salta",
        price: "23.500",
        date: "12/11/2023 09:30hs",
      },
      {
        id: 6,
        image: "/ushuaia.avif",
        from: "Buenos Aires",
        to: "Ushuaia",
        price: "29.300",
        date: "14/11/2023 22:00hs",
      },
      {
        id: 7,
        image: "/jujuy.avif",
        from: "Buenos Aires",
        to: "Jujuy",
        price: "24.100",
        date: "08/11/2023 16:30hs",
      },
      {
        id: 8,
        image: "/calafate.avif",
        from: "Buenos Aires",
        to: "El Calafate",
        price: "28.700",
        date: "09/11/2023 19:00hs",
      },
      {
        id: 9,
        image: "/tucuman.avif",
        from: "Buenos Aires",
        to: "San Miguel de Tucumán",
        price: "21.500",
        date: "22/11/2023 02:30hs",
      },
    ],
    excursions: [
      {
        image: "/exc-ushuaia.avif",
        name: "Excursión Ushuaia",
        price: "23.500",
      },
      {
        image: "/exc-salta.jpg",
        name: "Excursión Salta",
        price: "14.900",
      },
      {
        image: "/exc-bariloche.avif",
        name: "Excursión Bariloche",
        price: "22.100",
      },
      {
        image: "/exc-sanrafael.avif",
        name: "Excursión San Rafael",
        price: "33.700",
      },
      {
        image: "/exc-calafate.jpg",
        name: "Excursión El Calafate",
        price: "26.500",
      },
      {
        image: "/exc-grutas.avif",
        name: "Excursión Las Grutas",
        price: "19.600",
      },
      {
        image: "/exc-merlo.avif",
        name: "Excursión Merlo",
        price: "18.200",
      },
    ],
    favorites: favoritesStorage ? JSON.parse(favoritesStorage) : {},
    currentBuy: null,
  },
  setContext: (_value) => {},
};

const Context = createContext(defaultContext);

export const ContextProvider = ({ children }: any) => {
  const [context, setContextRaw] = useState(defaultContext.context);
  const setContext = (value: SetStateAction<{ user: null }>) => {
    setContextRaw({ ...context, ...value });
  };

  return (
    <Context.Provider value={{ context, setContext }}>
      {children}
    </Context.Provider>
  );
};

export const useContext = () => {
  return useReactContext(Context);
};
