import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform1 from "./components/Textform1";
import React, { useState } from "react";
// import { Switch, Route } from "react-router-dom";
//to
// import { Routes ,Route } from 'react-router-dom';
// import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert(" Dark Mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      setInterval(() => {
        document.title = "TextUtils is Amazing Mode";
      }, 2000);
      setInterval(() => {
        document.title = "Install TextUtils Now";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Light Mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextUtils"
          mode={mode}
          about="About Us"
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
        <Textform1
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode}
              />
          {/* <Routes> */}
            {/* <Route exact path='/about' element={<About/>}/> */}
            {/* <Route exact path='/' element={<Textform1
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode}
              />}/> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
