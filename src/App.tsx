import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/main.sass";

import { HomePage } from "./pages";

export const App: React.FC = (): React.JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
