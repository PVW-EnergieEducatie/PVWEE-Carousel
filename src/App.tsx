import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Carousel from './Carousel';
import { GebouwContext, getgebouwen } from './data/Gebouwen';
import { Gebouw } from './interfaces/Gebouw';
import Settings from './Pages/Settings';
import { MqttClient, MqttContext } from './utils/MqttClient';

function App() {
  const [gebouw, setGebouw] = useState<Gebouw>();

  useEffect(() => {
    getgebouwen().then((gebouwen) => {
      setGebouw(gebouwen[0]);
    });
  }, []);
  return (
    <GebouwContext.Provider value={{ gebouw, setGebouw }}>
      <MqttContext.Provider value={MqttClient()}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Carousel />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </BrowserRouter>
      </MqttContext.Provider>
    </GebouwContext.Provider>
  );
}

export default App;
