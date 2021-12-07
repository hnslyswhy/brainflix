import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Main />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
