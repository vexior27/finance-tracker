import '@mantine/core/styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MantineProvider } from '@mantine/core';
import Menu from './components/Menu';

import Trips from './components/Trips';

function App() {

  return (
    <MantineProvider>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="overview" element={<h2>NIgger</h2>} />
          <Route path="trips" element={<Trips />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
