// import 'core-js/stable'; // 貌似babelrc配置了corejs就不需要这个了
import 'regenerator-runtime/runtime'; // 添加这个才能使用async await语法,之前是使用
import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import { Router } from '@reach/router';
import ComponentOne from './components/component_one';
import ContainerOne from './containers/container_one';
import ComponentThree from './components/component_three';
import TsDemo from './components/TsDemo';
import ComponentFive from './components/componentFive';
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
if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
        try {
            await navigator.serviceWorker.register('/sw.js');
        } catch (e) {
            console.log('Sw registration failed');
        }
    });
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
        <ComponentOne path="/" />
        <ComponentOne path="one" />
        <ContainerOne path="two" />
        <ComponentThree path="three" />
        <ComponentFive path="five" />
        <TsDemo path="four" />
    </Router>
);

render(<App />, document.getElementById('app'));
