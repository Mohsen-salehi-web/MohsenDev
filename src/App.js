import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './component/main';
import Header from './component/header';
import Resume from './component/resume';
import Call from "./component/call";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Main />} />
          <Route path="resume" element={<Resume />} />
          <Route path="call" element={<Call />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
