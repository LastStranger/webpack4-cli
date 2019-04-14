import React from 'react';
import {render} from "react-dom";


if (module.hot) {
    // 实现热更新
    module.hot.accept();
}
const App = ({}) => (
    <div>
        hello world
    </div>
);

render(<App/>, document.getElementById('app'));
