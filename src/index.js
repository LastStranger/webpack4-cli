import React from 'react';
import {render} from "react-dom";
import "normalize.css";
import {Router} from "@reach/router";
import ComponentTwo from "./components/component_two";
// import ComponentOne from "./components/component_one";
// import ContainerOne from "./containers/container_one";
// import {createStore, applyMiddleware} from 'redux';
// import {Provider} from "react-redux";
// import rootReducer from "./reducers";
// import thunk from 'redux-thunk';
// import Loadable from "react-loadable";

// const store = createStore(rootReducer, applyMiddleware(thunk));

export const ConfigContext = React.createContext();

if (module.hot) {
    // 实现热更新
    module.hot.accept();
}

// const TwoComponentLoadable = Loadable({
//    loader: () => import('./components/component_one'),
//    loading: Loading,
// });
const configValue = {
    something: "belong to glob",
};

const App = ({}) => (
    <ConfigContext.Provider value={configValue}>
        <Router>
            <ComponentTwo path='two'/>
        </Router>
    </ConfigContext.Provider>
)
;

render(<App/>, document.getElementById('app'));
