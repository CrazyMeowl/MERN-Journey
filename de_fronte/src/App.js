
import 'bootstrap/dist/css/bootstrap.min.css';

// import from components
import DeNavBar  from './components/DeNavBar';
import { Route, Routes } from 'react-router-dom';
import {Home} from "./pages/Home"
import {Members} from "./pages/Members"
import {NotFound } from './pages/NotFound';
function App() {
  return (

    <>
    <DeNavBar>

    </DeNavBar>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Members" element={<Members />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
    </>
    
  );
}

export default App;
