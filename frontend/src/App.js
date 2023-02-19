import {BrowserRouter, Route, Routes} from "react-router-dom";
import Authentification from "./pages/Auth";
import Interventions from "./pages/Interventions";
import ListMaterial from "./pages/List_material";
import NewMaterial from "./pages/New_material";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import NewUser from "./pages/New_user";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
          <Route path="/login" element={ <Authentification /> } />
          <Route path="/" element={<Home />} />
          <Route path="/materials" element={<ListMaterial/>}/>
          <Route path="/new-material" element={<NewMaterial/>}/>
          <Route path="/interventions" element={<Interventions />}/>
          <Route path="/liste-utilisateurs" element={<UserList />}/>
          <Route path="/new-user" element={<NewUser/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;