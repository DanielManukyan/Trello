import "./index.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./Pages/Layout";
import BoardsPage from "./Pages/BoardsPage";
import TemplatesPage from "./Pages/TemplatesPage";
import HomePage from "./Pages/HomePage";
import BoardPage from "./components/Boards/BoardPage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<BoardsPage />} />
            <Route path="/templates" element={<TemplatesPage />} />
            <Route path="/Home" element={<HomePage />} />
          </Route>
          <Route path="/board/:id" element={<BoardPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
