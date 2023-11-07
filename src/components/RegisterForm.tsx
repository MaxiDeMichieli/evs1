import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "../context/ContextProvider";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [identityNumber, setIdentityNumber] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { context, setContext } = useContext();

  useEffect(() => {
    if (context.user) navigate("/");
  }, [context.user]);

  const handleRegister = () => {
    const user = {
      name,
      identityNumber,
      address,
      phone,
      email,
      password,
    };
    const usersStorage = localStorage.getItem("users");
    const users = usersStorage ? JSON.parse(usersStorage) : [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("user", JSON.stringify(user));
    setContext({ user });
  };

  const isNumber = (value: string): boolean => !isNaN(Number(value));

  return (
    <div className="flex h-[100vh] justify-center items-center p-0 m-0">
      <div className="flex flex-col w-full md:w-1/2 p-4 justify-center items-center h-full">
        <img
          src="tags-color.svg"
          className="w-72 mb-10 md:hidden md:mb-0 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <form
          className="flex max-w-sm flex-col w-full"
          onSubmit={(e) => e.preventDefault()}
        >
          <TextField
            label="Nombre completo"
            variant="filled"
            fullWidth
            margin="dense"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="DNI"
            variant="filled"
            fullWidth
            margin="dense"
            value={identityNumber}
            onChange={(e) => {
              if (isNumber(e.target.value)) setIdentityNumber(e.target.value);
            }}
          />
          <TextField
            label="Domicilio"
            variant="filled"
            fullWidth
            margin="dense"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextField
            label="Celular"
            variant="filled"
            fullWidth
            margin="dense"
            value={phone}
            onChange={(e) => {
              if (isNumber(e.target.value)) setPhone(e.target.value);
            }}
          />
          <TextField
            label="Correo"
            variant="filled"
            type="email"
            fullWidth
            margin="dense"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Contraseña"
            variant="filled"
            type="password"
            fullWidth
            margin="dense"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-around mt-6">
            <Button
              variant="contained"
              color="primary"
              onClick={handleRegister}
              type="submit"
            >
              Registrarse
            </Button>
            <Button
              variant="text"
              color="primary"
              onClick={() => navigate("/login")}
            >
              Iniciar sesión
            </Button>
          </div>
        </form>
      </div>
      <div className="hidden md:flex w-1/2 h-full justify-center items-center bg-[#0084AB]">
        <img
          src="tags-white.svg"
          className="w-2/3 max-w-md cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
};

export default RegisterForm;
