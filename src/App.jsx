import { Routes, Route } from "react-router-dom";
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { ShowsPage } from './pages/ShowsPage';
import { ShowsDetailPage } from "./pages/ShowsDetailPage";
import { CastPage } from './pages/CastPage';


export  function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/shows" element={<ShowsPage/>}/>
        <Route path="/shows/:id" element={<ShowsDetailPage/>}/>
        <Route path="/shows/:id/cast" element={<CastPage/>}/>
      </Routes>
    </>
  )
}
