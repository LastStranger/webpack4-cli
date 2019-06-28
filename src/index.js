import React from 'react';
import {render} from "react-dom";
import "normalize.css";
import {Router} from "@reach/router";
import ComponentOne from "./components/component_one";
import ContainerOne from "./containers/container_one";
// import Loadable from "react-loadable";


// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('/service-worker.js').then(registration => {
//             console.log('SW registered: ', registration);
//         }).catch(registrationError => {
//             console.log('SW registration failed: ', registrationError);
//         });
//     });
// }
if ("serviceWorker" in navigator){
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js");
    })
}
if (module.hot) {
    // 实现热更新
    module.hot.accept();
}

// const TwoComponentLoadable = Loadable({
//    loader: () => import('./components/component_one'),
//    loading: Loading,
// });

const App = ({}) => (
    <Router>
        <ComponentOne path='/'/>
        <ComponentOne path='one'/>
        <ContainerOne path='two'/>
    </Router>
);

render(<App/>, document.getElementById('app'));
