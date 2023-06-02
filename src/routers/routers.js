import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../pages/homepage';
import DetailsPage from '../pages/detailspage';
import MyLibrary from '../pages/mylibrary';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="detailspage" element={<DetailsPage />} />
      <Route path="mylibrary" element={<MyLibrary />} />
    </Routes>
  );
}

export default Routers;
