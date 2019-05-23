import React from 'react';
import {render} from "react-dom";
import "normalize.css";
import {Router} from "@reach/router";
import ComponentOne from "./components/component_one";
import ContainerOne from "./containers/container_one";
import {createStore} from 'redux';
import {Provider} from "react-redux";
import rootReducer from "./reducers";
// import Loadable from "react-loadable";

const store = createStore(rootReducer);
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('/service-worker.js').then(registration => {
//             console.log('SW registered: ', registration);
//         }).catch(registrationError => {
//             console.log('SW registration failed: ', registrationError);
//         });
//     });
// }
if (module.hot) {
    // 实现热更新
    module.hot.accept();
}

// const TwoComponentLoadable = Loadable({
//    loader: () => import('./components/component_one'),
//    loading: Loading,
// });

const App = ({}) => (
    <Provider store={store}>
        <Router>
            <ComponentOne path='one'/>
            {/*<ContainerOne path='two'/>*/}
        </Router>
    </Provider>
);

render(<App/>, document.getElementById('app'));
