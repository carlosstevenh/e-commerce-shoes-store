import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import DataProvider from './components/Context/DataContext';
import Home from './components/Home/Home';
import CarContent from './components/CarContent/CarContent';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car" element={<CarContent />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
