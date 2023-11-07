import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "../context/ContextProvider";
import Header from "./Header";
import Arrow from "./Arrow";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";
import SeatingView from "./SeatingView";

const BuyTicketSeats = () => {
  const [passengersQuantity, setPassengersQuantity] = useState(1);
  const [seats, setSeats] = useState([]);
  const { context, setContext } = useContext();
  const navigate = useNavigate();
  const destination = context.destinations.find(
    (destination) => destination.id === 4
  );

  useEffect(() => {
    if (context.currentBuy) {
      setPassengersQuantity(context.currentBuy.passengersQuantity);
    }
  }, []);

  const handleContinue = () => {
    setContext({
      currentBuy: {
        ...(context.currentBuy?.passengersQuantity ?? {}),
        passengersQuantity,
        seats,
      },
    });
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <Header />
      <div className="relative flex justify-center w-full px-3 md:px-6 lg:px-16 min-h-screen overflow-x-hidden">
        <div className="w-full max-w-7xl z-10">
          <div className="mt-10 text-gray-800">
            <div className="flex items-center text-xl">
              <span className="mr-2">{destination?.from}</span>
              <Arrow />
              <span className="ml-2">{destination?.to}</span>
            </div>
            <span className="text-sm">{destination?.date}</span>
            <div className="mt-6">
              <div className="mt-4 max-w-[100px]">
                <FormControl fullWidth>
                  <InputLabel id="passengers-quantity">Pasajeros</InputLabel>
                  <Select
                    labelId="passengers-quantity"
                    id="passengers-quantity"
                    label="Cantidad"
                    value={passengersQuantity}
                    onChange={(e) =>
                      setPassengersQuantity(Number(e.target.value))
                    }
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="flex flex-col mt-6">
                <span className="text-xl mb-4">Elije tus asientos:</span>
                <SeatingView
                  maxSeats={passengersQuantity}
                  setSeatsState={setSeats}
                  seatsState={seats}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0084AB] h-28 w-full sticky bottom-0 left-0 z-50 shadow-inner flex justify-center">
        <div className="max-w-7xl w-full h-full flex justify-center items-center">
          <span className="mr-6">
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              onClick={() => navigate(`/destination/${destination?.id}`)}
            >
              Volver
            </Button>
          </span>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => {
              handleContinue();
              navigate(`/destination/${destination?.id}/buy-ticket/passengers`);
            }}
          >
            Continuar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BuyTicketSeats;
