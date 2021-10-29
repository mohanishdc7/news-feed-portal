import { Route, Switch } from "react-router";

import Layout from "./components/layout/Layout";
import UpcomingEvents from "./pages/UpcomingEvents";
import ResearchAndAcademices from "./pages/ResearchAndAcademics";
import Sports from "./pages/Sports";
import Placements from "./pages/Placements";
import AddNewsItemPage from "./pages/AddNewsItemPage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <UpcomingEvents />
        </Route>
        <Route path="/research-academics">
          <ResearchAndAcademices />
        </Route>
        <Route path="/sports">
          <Sports />
        </Route>
        <Route path="/placements">
          <Placements />
        </Route>
        <Route path="/add-news">
          <AddNewsItemPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
