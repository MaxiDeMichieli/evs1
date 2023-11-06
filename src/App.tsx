import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextProvider } from "./context/ContextProvider";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import "./App.css";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signin" element={<RegisterForm />} />
          <Route path="/" element={"home"} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
