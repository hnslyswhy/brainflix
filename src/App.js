import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Upload from "./components/pages/Upload/Upload";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(routerProps) => <Main {...routerProps} />}
          />
          <Route
            path="/video/:videoId"
            render={(routerProps) => <Main {...routerProps} />}
          />
          <Route
            path="/upload"
            render={(routerProps) => <Upload {...routerProps} />}
          />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
