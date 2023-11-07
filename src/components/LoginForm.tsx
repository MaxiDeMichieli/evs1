import { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "../context/ContextProvider";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { context, setContext } = useContext();

  useEffect(() => {
    if (context.user) navigate("/");
  }, [context.user]);

  const handleLogin = () => {
    const usersStorage = localStorage.getItem("users");
    const users: any[] = usersStorage ? JSON.parse(usersStorage) : [];
    const userMatch = users.find(
      (user: any) => user.email === email && user.password === password
    );
    if (userMatch) {
      localStorage.setItem("user", JSON.stringify(userMatch));
      setContext({ user: userMatch });
    }
  };

  return (
    <div className="flex h-[100vh] justify-center items-center p-0 m-0">
      <div className="flex flex-col w-full md:w-1/2 p-4 justify-center items-center h-full">
        <img
          src="/tags-color.svg"
          className="w-72 mb-10 md:hidden md:mb-0 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <form
          className="flex max-w-sm flex-col w-full"
          onSubmit={(e) => e.preventDefault()}
        >
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
              type="submit"
              onClick={handleLogin}
            >
              Iniciar sesión
            </Button>
            <Button
              variant="text"
              color="primary"
              onClick={() => navigate("/signin")}
            >
              Registrarse
            </Button>
          </div>
        </form>
      </div>
      <div className="hidden md:flex w-1/2 h-full justify-center items-center bg-[#0084AB]">
        <img
          src="/tags-white.svg"
          className="w-2/3 max-w-md cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
};

export default LoginForm;
