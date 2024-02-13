import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
