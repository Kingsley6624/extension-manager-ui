import React from "react";
import Home from "./components/Home";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <div className="">
        <Home />
      </div>
    </ThemeProvider>
  );
};

export default App;
