import { Button } from "@mui/material";
import { useContext } from "../context/ContextProvider";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const { context, setContext } = useContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    setContext({
      user: null,
    });
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="flex justify-center w-full py-3 px-3 md:px-6 lg:px-16 shadow-md sticky top-0 bg-white z-50">
      <div className="flex justify-between items-center w-full max-w-7xl">
        <img
          src="tags-icon-color.svg"
          className="w-10 cursor-pointer"
          onClick={() => navigate("/")}
        />
        {context.user ? (
          <div className="flex">
            <div className="flex items-center">
              <Link
                to={"/"}
                className="mr-5 text-sm font-medium text-[#0084AB]"
              >
                Inicio
              </Link>
              <Link
                to={"/favorites"}
                className="mr-10 text-sm font-medium text-[#0084AB]"
              >
                Favoritos
              </Link>
              <img src="user-icon.svg" className="w-8 h-8 rounded-full" />
              <span className="ml-2 text-sm text-gray-800 mr-8 font-medium">
                {context.user.name}
              </span>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={() => handleLogout()}
              >
                Cerrar sesión
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex items-center">
            <Link to={"/"} className="mr-5 text-sm font-medium text-[#0084AB]">
              Inicio
            </Link>
            <Link
              to={"/favorites"}
              className="mr-10 text-sm font-medium text-[#0084AB]"
            >
              Favoritos
            </Link>
            <div className="mr-8">
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => navigate("/login")}
              >
                Iniciar sesión
              </Button>
            </div>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              onClick={() => navigate("/signin")}
            >
              Registrarse
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
