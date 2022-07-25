import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./components/shared/GlobalStyles/GlobalStyles";
import Navbar from "./components/shared/Navbar/Navbar";
import Home from "./pages/Home/Home";
import "./components/shared/GlobalStyles/customFonts.css";

// import "./assets/fonts/MortendBold.ttf";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
