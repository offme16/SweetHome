import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/Header";
import Main from "./pages/main/Main";
import { Footer } from "./components/footer/Footer";
import Price from "./pages/price/Price";
import Service from "./pages/service/Service";
import Registration from "./pages/registration/Registration";
import Auth from "./pages/auth/Auth";
import PersonalArea from "./pages/personalarea/PersonalArea";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "./store/userSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/price" element={<Price />} />
          <Route path="/service" element={<Service />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/cabinet" element={<PersonalArea />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
