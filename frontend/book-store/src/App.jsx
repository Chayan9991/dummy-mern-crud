import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import ViewBooks from './components/ViewBooks';
import axios from 'axios' ; 
import { useEffect } from "react";

function App() {

  useEffect(()=>{
      axios.get('http://localhost:5555/books').then(
        response => console.log(response)
      )
  }, [])

  return (
    <>
      <div className="container">
        <Header />
        <hr/>
        <div className="mt-2">
          <Routes>
            <Route path="/view-books" element={<ViewBooks />} />   
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
