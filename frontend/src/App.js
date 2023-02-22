import React from "react";
import "./App.scss";
import {BrowserRouter, Route, Routes} from "react-router-dom";
// import Authentification from "./pages/Auth";
// import Interventions from "./pages/Interventions";
import ListDemande from "./pages/Liste_demande";
import ListMaterial from "./pages/List_material";
import NewMaterial from "./pages/New_material";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import NewUser from "./pages/New_user";
import Topbar from "./components/topbar/topbar";
import Sidebar from "./components/sidebar/sidebar";
import UnderConstruction from "./pages/Under_construction";

const App = () => {
  // const [authenticated, setAuthenticated] = useState(false);

  // if (authenticated) {
  //   return <Navigate to="/login" />
  // }else{
  //   return(
  //     <BrowserRouter>
  //       {/* <Route path="/login" element={ <Authentification /> } /> */}
  //       <div className={'dashboard'}>
  //       <Topbar />
  //       <div className='containerApp'>
  //         <Sidebar />
  //         <div className='containerApp_right'>
  //           <Routes>
  //             <Route path="/" element={<Home />} />
  //             <Route path="/materials" element={<ListMaterial/>}/>
  //             <Route path="/new-material" element={<NewMaterial/>}/>
  //             <Route path="/interventions" element={<Interventions />}/>
  //             <Route path="/liste-utilisateurs" element={<UserList />}/>
  //             <Route path="/new-user" element={<NewUser/>}/>
  //           </Routes>
  //         </div>
  //       </div>
  //     </div>
        
  //     </BrowserRouter>
  //   )
  // }

  return(
    <BrowserRouter>
      {/* <Route path="/login" element={ <Authentification /> } /> */}
      <div className={'dashboard'}>
      <Topbar />
      <div className='containerApp'>
        <Sidebar />
        <div className='containerApp_right'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/materials" element={<ListMaterial/>}/>
            <Route path="/new-material" element={<NewMaterial/>}/>
            <Route path="/liste-demandes" element={<ListDemande/>}/>
            <Route path="/under-construction" element={<UnderConstruction />}/>
            <Route path="/liste-utilisateurs" element={<UserList />}/>
            <Route path="/new-user" element={<NewUser/>}/>
            <Route path="/edit-user/:id" element={<NewUser isUpdate={true}/>}/>
          </Routes>
        </div>
      </div>
    </div>
      
    </BrowserRouter>
  )
}

export default App;