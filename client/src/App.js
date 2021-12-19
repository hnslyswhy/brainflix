import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PageHeader from "./components/PageHeader/PageHeader";
import Main from "./pages/Main/Main";
import Upload from "./pages/Upload/Upload";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <PageHeader />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/video/:videoId" component={Main} />
        <Route path="/upload" component={Upload} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
