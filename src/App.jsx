import React from "react";
import "./App.scss";

import { About, Projects, SideBar, Home, Skills, Contact } from "./components";

const App = () => {
  return (
    <div className="app">
      <SideBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
