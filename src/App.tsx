import React from "react";

import TopBar from "./tabs/topbar";
import Music from "./pages/Music";
import Hero from "./pages/Hero";
import Members from "./pages/Members";
import Footer from "./tabs/Footer";
//import Bio from "./pages/Bio";

import "./css/index.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <TopBar />
      <Hero />
      <Members />
      <Music />
      <Footer />
    </div>
  );
};

export default App;
