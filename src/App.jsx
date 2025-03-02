import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";
import NavBar from "./navBar/NavBar";
import MusicPlayer from "./musicPlayer/MusicPlayer";
import MObserver from "./mutationObserver/MObserver";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <NavBar />
        <main className="main">
          <Routes>
            <Route path="/" element={<MusicPlayer></MusicPlayer>} />
            <Route path="/mutobs" element={<MObserver></MObserver>} />
          </Routes>
        </main>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
