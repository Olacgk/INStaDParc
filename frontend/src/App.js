import {BrowserRouter, Route, Routes} from "react-router-dom";
import Authentification from "./pages/Auth";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Authentification /> } />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;