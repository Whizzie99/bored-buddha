import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./components/shared/GlobalStyles/GlobalStyles";
import Navbar from "./components/shared/Navbar/Navbar";
import AOS from "aos";
import Home from "./pages/Home/Home";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import StakingPortal from "./pages/StakingPortal/StakingPortal";
// import Footer from "./components/shared/Footer/Footer";
import "./components/shared/GlobalStyles/customFonts.css";

// import "./assets/fonts/MortendBold.ttf";

// AOS styles
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [AOS]);

  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Navbar />
        <AudioPlayer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/staking-portal" element={<StakingPortal />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
