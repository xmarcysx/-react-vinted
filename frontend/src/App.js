import './App.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

import { PrimeReactProvider } from 'primereact/api';
import Navbar from './components/Navbar';
import VintedFilterList from './components/VintedFilterList';

function App() {
  return (
    <>
      <PrimeReactProvider>
        <Navbar></Navbar>
        <VintedFilterList></VintedFilterList>
      </PrimeReactProvider>
    </>
  );
}

export default App;
