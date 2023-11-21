import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/Header";
import Main from "./pages/main/Main";
import { Footer } from "./components/footer/Footer";
import Price from "./pages/price/Price";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/price" element={<Price />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
