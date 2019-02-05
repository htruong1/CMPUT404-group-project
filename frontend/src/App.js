import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PonyNote from "./components/PonyNote";
import NotFound from "./components/NotFound";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import ponyApp from "./reducers";

let store = createStore(ponyApp);

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={PonyNote}/>
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
  }
}

export default App;