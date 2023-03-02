import React, { useEffect, useState } from "react";
import "./App.scss";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Authentification from "./pages/Auth";
// import Interventions from "./pages/Interventions";
import ListDemande from "./pages/Liste_demande";
import ListMaterial from "./pages/List_material";
import NewMaterial from "./pages/New_material";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import NewUser from "./pages/New_user";
import UnderConstruction from "./pages/Under_construction";
import Profile from "./pages/Profile";
import Rapport from "./pages/Rapport";
import DemandeMat from "./pages/MaterialDemande";
import Auth from "./context/Auth";

import { Navigate } from "react-router-dom"
import Layout from "./Layout";

const App = () => {
  const [user, setUser] = useState();
  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem('user')) )
  },[])
  const NotLogged = ({ logged }) => logged ? <Outlet /> : <Navigate replace to="/Login" />
  const Logged = ({ logged }) => logged ? <Layout /> : <Navigate replace to="/Login" />

  return (
    <Auth.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route element={<NotLogged logged={user} />}>
            <Route path='login' element={<Authentification />} />
          </Route>
          <Route element={<Logged logged={user} />}>
            <Route path="/" element={<Home  />} />
            <Route path="/materials" element={<ListMaterial />} />
            <Route path="/new-material" element={<NewMaterial />} />
            <Route path="/liste-demandes" element={<ListDemande />} />
            <Route path="/under-construction" element={<UnderConstruction />} />
            <Route path="/liste-utilisateurs" element={<UserList />} />
            <Route path="/new-user" element={<NewUser isUpdate={false} />} />
            <Route path="/edit-user/:id" element={<NewUser isUpdate={true} />} />
            <Route path="/rapports" element={<Rapport />} />
            <Route path="/demande-materiel" element={<DemandeMat />} />
            <Route path="/demande-materiel" element={<DemandeMat />} />
            <Route path="/demande-materiel" element={<DemandeMat />} />
            <Route path="/profil" element={<Profile />} />
          </Route>
          <Route
            path='*'
            element={
              "Bienvenue dans le nullpart. Ta quête de vérité t'as conduit à ce vide intersidéral. Bref !! 404 !! Rien à signaler"
            }
          />
        </Routes>
      </BrowserRouter>
    </Auth.Provider>
  )
}

export default App;