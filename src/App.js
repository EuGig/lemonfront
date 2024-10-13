import './App.css';
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
      <>
		<Router>
			<Header />
			<Main />
			<Footer />
		</Router>
	</>
  );
}

export default App;
