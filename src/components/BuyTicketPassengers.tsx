import { useNavigate } from "react-router-dom";
import { useContext } from "../context/ContextProvider";
import Header from "./Header";
import Arrow from "./Arrow";
import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";

const PassengerForm = ({ passengersQuantity }) => {
  const [passengers, setPassengers] = useState([]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const newPassengers = [...passengers];
    newPassengers[index] = {
      ...newPassengers[index],
      [name]: value,
    };
    setPassengers(newPassengers);
  };

  const isNumber = (value: string): boolean => !isNaN(Number(value));

  const formularios = Array.from({ length: passengersQuantity }, (_, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <form>
        <span className="text-lg text-gray-800">Pasajero {index + 1}</span>
        <TextField
          fullWidth
          size="small"
          label={`Nombre Completo`}
          variant="outlined"
          margin="dense"
          name={`name`}
          value={passengers[index]?.name || ""}
          onChange={(e) => handleChange(e, index)}
        />
        <TextField
          fullWidth
          size="small"
          label={`DNI`}
          variant="outlined"
          margin="dense"
          name={`dni`}
          value={passengers[index]?.dni || ""}
          onChange={(e) => {
            if (isNumber(e.target.value)) handleChange(e, index);
          }}
        />
        <TextField
          fullWidth
          size="small"
          label={`Edad`}
          variant="outlined"
          margin="dense"
          name={`age`}
          value={passengers[index]?.age || ""}
          onChange={(e) => {
            if (isNumber(e.target.value)) handleChange(e, index);
          }}
        />
        <TextField
          fullWidth
          size="small"
          label={`Domicilio`}
          variant="outlined"
          margin="dense"
          name={`address`}
          value={passengers[index]?.address || ""}
          onChange={(e) => handleChange(e, index)}
        />
      </form>
    </Grid>
  ));

  return (
    <Grid container spacing={2}>
      {formularios}
    </Grid>
  );
};

const BuyTicketPassengers = () => {
  const [successBuy, setSuccessBuy] = useState(false);
  const { context } = useContext();
  const navigate = useNavigate();
  const destination = context.destinations.find(
    (destination) => destination.id === 4
  );

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
              <PassengerForm
                passengersQuantity={context.currentBuy?.passengersQuantity ?? 1}
              />
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
              onClick={() =>
                navigate(`/destination/${destination?.id}/buy-ticket/seats`)
              }
            >
              Volver
            </Button>
          </span>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => setSuccessBuy(true)}
          >
            Continuar
          </Button>
        </div>
      </div>
      <div
        className={`fixed inset-0 flex items-center justify-center bg-green-500 transition-transform transform z-50 ${
          successBuy ? "scale-100" : "scale-0"
        }`}
      >
        <div className="text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Compra Completada</h2>
          <p className="text-xl mb-4">¡Gracias por tu compra!</p>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate("/")}
            className="mt-4"
          >
            Ir al Inicio
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BuyTicketPassengers;
