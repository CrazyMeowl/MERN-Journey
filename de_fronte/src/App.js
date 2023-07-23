
import 'bootstrap/dist/css/bootstrap.min.css';
import './theme.css'
// import from components
import DeNavBar  from './components/DeNavBar';
import { Route, Routes } from 'react-router-dom';
import { Home } from "./pages/Home"
import { Members } from "./pages/Members"
import { NotFound } from './pages/NotFound';
import { SwaggerDoc } from './pages/swagger/SwaggerDoc';
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
function App() {
  return (

    <>
    <DeNavBar>

    </DeNavBar>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Members" element={<Members />}/>
      <Route path="/api/docs" element={<SwaggerDoc />}/>
      <Route path="/signin" element={<Signin />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
    </>
    
  );
}

export default App;
