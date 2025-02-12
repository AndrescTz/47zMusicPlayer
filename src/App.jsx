import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";
import NavBar from "./navBar/NavBar";
import Home from "./home/Home";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home></Home>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
