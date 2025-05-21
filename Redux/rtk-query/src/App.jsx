import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Categories from './components/Categories'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from './components/Detail';
function App() {


  return (
    <>
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<Categories/>} />
          <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
