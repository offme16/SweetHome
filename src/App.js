import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/Header";
import Main from "./pages/main/Main";
import { Footer } from "./components/footer/Footer";
import Price from "./pages/price/Price";
import Service from "./pages/service/Service";
import Login from "./pages/login/Login";
import Auth from "./pages/auth/Auth";
import PersonalArea from "./pages/personalarea/PersonalArea";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/price" element={<Price />} />
          <Route path="/service" element={<Service />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/cabinet" element={<PersonalArea />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
