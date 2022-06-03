import React from 'react';
import ReactDOM from 'react-dom';
import { MqttClient, MqttContext } from './utils/MqttClient';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Carousel from './Carousel';
import Settings from './Pages/Settings';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <MqttContext.Provider value={MqttClient()}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </MqttContext.Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
