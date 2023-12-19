import React from "react";
import DrawerAppBar from "./Components/Header"
import HomeSection from "./Components/HomeSection";
import About from "./Components/About";
import ProjectSection from "./Components/ProjectSection";
import Footer from "./Components/Footer";
import SkillSection from "./Components/SkillsSection";

function App() {
  return (
    <div className="App">
      <DrawerAppBar />
      <HomeSection />
      <About />
      <ProjectSection />
      <SkillSection />
      <Footer />
    </div>
  );
}

export default App;
