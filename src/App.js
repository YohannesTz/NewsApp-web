import React from 'react';
import Main from "./layout/Main";
import "antd/dist/antd.css";
import "./layout/Main.css";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LoginPage from "./layout/LoginPage";

function App() {
  return (
      <BrowserRouter>
        <div>
            <Switch>
                <Route path="/login" component={LoginPage} />
                <Route path="/" exact component={Main} />
            </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
