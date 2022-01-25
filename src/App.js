import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Form from './components/Form';
import ResForm from './components/ResForm';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
