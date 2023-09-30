import { Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import HomePages from "./pages/HomePages";
import PokedexPage from "./pages/PokedexPage";
import PokedexidPage from "./pages/PokedexidPage";
import ProtectedRoutes from "./pages/ProtectedRoutes";

function App() {

  

  return (
    <div>
      <Routes >
        <Route path="/" element={<HomePages />} />
        <Route element={<ProtectedRoutes/>}>
          <Route path='/pokedex' element={<PokedexPage />} />
          <Route path='/pokedex/:id' element={<PokedexidPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
