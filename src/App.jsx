import '@mantine/core/styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MantineProvider } from '@mantine/core';
import Menu from './components/Menu';

import Trips from './components/Trips';
import Overview from './components/Overview';
import Expenses from './components/Expenses';
import Home from './components/Home';

function App() {

  return (
    <MantineProvider>
      <BrowserRouter>
        <div className='flex h-screen font-inter'>
          <Menu />
          <Routes>
            <Route path="overview" element={<Overview/>} />
            <Route path="trips" element={<Trips />} />
            <Route path='expenses' element={<Expenses/>}/>
            <Route path='home' element={<Home/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
