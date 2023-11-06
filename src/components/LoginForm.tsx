import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Correo:", email);
    console.log("Contraseña:", password);
  };

  return (
    <div className="flex h-[100vh] justify-center items-center p-0 m-0">
      <div className="flex flex-col w-full md:w-1/2 p-4 justify-center items-center">
        <img src="/tags-color.svg" className="w-72 mb-10 md:hidden md:mb-0" />
        <form className="flex max-w-sm flex-col w-full">
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
            <Button variant="contained" color="primary" onClick={handleLogin}>
              Iniciar sesión
            </Button>
            <Link to="/signin" className="uppercase">
              Registrarse
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

export default LoginForm;
