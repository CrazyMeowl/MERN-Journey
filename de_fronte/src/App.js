import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

// import from components
import DeNavBar  from './components/DeNavBar';
import { Route, Routes } from 'react-router-dom';
import {Home} from "./pages/Home"
import {Cars} from "./pages/Cars"
import {NotFound } from './pages/NotFound';
function App() {
  return (
    // <div className="App">
    //   <DeNavBar></DeNavBar>
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    // </div>
    <>
    <DeNavBar>

    </DeNavBar>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Cars" element={<Cars />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
    </>
    
  );
}

export default App;
