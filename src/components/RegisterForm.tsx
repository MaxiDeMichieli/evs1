import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [identityNumber, setIdentityNumber] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    console.log("Correo:", email);
    console.log("Contraseña:", password);
  };

  const isNumber = (value: string): boolean => !isNaN(Number(value));

  return (
    <div className="flex h-[100vh] justify-center items-center p-0 m-0">
      <div className="flex flex-col w-full md:w-1/2 p-4 justify-center items-center">
        <img src="/tags-color.svg" className="w-72 mb-10 md:hidden md:mb-0" />
        <form className="flex max-w-sm flex-col w-full">
          <TextField
            label="Nombre completo"
            variant="outlined"
            fullWidth
            margin="dense"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="DNI"
            variant="outlined"
            fullWidth
            margin="dense"
            value={identityNumber}
            onChange={(e) => {
              if (isNumber(e.target.value)) setIdentityNumber(e.target.value);
            }}
          />
          <TextField
            label="Domicilio"
            variant="outlined"
            fullWidth
            margin="dense"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextField
            label="Celular"
            variant="outlined"
            fullWidth
            margin="dense"
            value={phone}
            onChange={(e) => {
              if (isNumber(e.target.value)) setPhone(e.target.value);
            }}
          />
          <TextField
            label="Correo"
            variant="outlined"
            type="email"
            fullWidth
            margin="dense"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Contraseña"
            variant="outlined"
            type="password"
            fullWidth
            margin="dense"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-around mt-2">
            <Button
              variant="contained"
              color="primary"
              onClick={handleRegister}
            >
              Registrarse
            </Button>
            <Link to="/login" className="uppercase">
              Iniciar sesión
            </Link>
          </div>
        </form>
      </div>
      <div className="hidden md:flex w-1/2 h-full justify-center items-center bg-[#0084AB]">
        <img src="/tags-white.svg" className="w-2/3 max-w-md" />
      </div>
    </div>
  );
};

export default RegisterForm;
