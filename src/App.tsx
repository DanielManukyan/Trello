import "./index.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BoardsPage from "./Pages/BoardsPage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BoardsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
