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
          <Route path="/" exact component={Main} />
          <Route path="/upload" component={Upload} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
