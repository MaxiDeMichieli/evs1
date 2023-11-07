import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextProvider } from "./context/ContextProvider";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { ThemeProvider, createTheme } from "@mui/material";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import Destination from "./components/Destination";
import BuyTicketSeats from "./components/BuyTicketSeats";
import BuyTicketPassengers from "./components/BuyTicketPassengers";
import "./App.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0084AB",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
});

function App() {
  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename="/tags/">
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signin" element={<RegisterForm />} />
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/destination/:id" element={<Destination />} />
            <Route
              path="/destination/:id/buy-ticket/seats"
              element={<BuyTicketSeats />}
            />
            <Route
              path="/destination/:id/buy-ticket/passengers"
              element={<BuyTicketPassengers />}
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ContextProvider>
  );
}

export default App;
