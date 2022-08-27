import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import UpcomingEvents from "./pages/UpcomingEvents";
import ResearchAndAcademices from "./pages/ResearchAndAcademics";
import Sports from "./pages/Sports";
import Placements from "./pages/Placements";
import AddNewsItemPage from "./pages/AddNewsItemPage";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./contexts/PrivateRoute";
import Logout from "./components/auth/Logout";

function App() {
  return (
    <div>
      <Layout>
        <AuthProvider>
          <Logout />
          <Routes>

            <Route exact path='/' element={<PrivateRoute />}>
              <Route exact path='/' element={<UpcomingEvents />} />
            </Route>
            <Route exact path='/research-academics' element={<PrivateRoute />}>
              <Route exact path='/research-academics' element={<ResearchAndAcademices />} />
            </Route>
            <Route exact path='/sports' element={<PrivateRoute />}>
              <Route exact path='/sports' element={<Sports />} />
            </Route>
            <Route exact path='/placements' element={<PrivateRoute />}>
              <Route exact path='/placements' element={<Placements />} />
            </Route>
            <Route exact path='/add-news' element={<PrivateRoute />}>
              <Route exact path='/add-news' element={<AddNewsItemPage />} />
            </Route>

            <Route path='/sign-up' element={<Register />} />
            <Route path='/login' element={<Login />} />
            
          </Routes>
        </AuthProvider>
      </Layout>
    </div>
  );
}

export default App;
