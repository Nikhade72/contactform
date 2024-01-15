import logo from './logo.svg';
import './App.css';
import ContactForm from './Component/ContactForm';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<ContactForm/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
