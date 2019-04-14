import React from 'react';
import {render} from "react-dom";
import "normalize.css";
import {Router} from "@reach/router";
import ComponentOne from "./components/component_one";
import ContainerOne from "./containers/container_one";

if (module.hot) {
    // 实现热更新
    module.hot.accept();
}
const App = ({}) => (
    <Router>
        <ComponentOne path='one'/>
        <ContainerOne path='two'/>
    </Router>
);

render(<App/>, document.getElementById('app'));
