import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";

import Layout from "./components/layout/Layout";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import UpcomingEvents from "./pages/UpcomingEvents";
import ResearchAndAcademices from "./pages/ResearchAndAcademics";
import Sports from "./pages/Sports";
import Placements from "./pages/Placements";
import AddNewsItemPage from "./pages/AddNewsItemPage";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/auth/PrivateRoute";

function App() {
  // const [token, setToken] = useState();
  // console.log({ token, setToken });
  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }

  return (
    <Layout>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path='/'>
              <UpcomingEvents />
            </PrivateRoute>
            <PrivateRoute path='/research-academics'>
              <ResearchAndAcademices />
            </PrivateRoute>
            <PrivateRoute path='/sports'>
              <Sports />
            </PrivateRoute>
            <PrivateRoute path='/placements'>
              <Placements />
            </PrivateRoute>
            <PrivateRoute path='/add-news'>
              <AddNewsItemPage />
            </PrivateRoute>

            <Route path='/sign-up'>
              <Register />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
          </Switch>
        </AuthProvider>
      </Router>
    </Layout>
  );
}

export default App;
