import './App.css';
import Page from './Page';
import Home from './Home';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes, Route } from'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/secret" element={<Page/>}></Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
