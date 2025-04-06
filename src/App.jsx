import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import Menu from './components/Menu';

function App() {

  return (
    <MantineProvider>
        <Menu/>
    </MantineProvider>
  )
}

export default App
